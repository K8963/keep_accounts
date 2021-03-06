axios.defaults.baseURL = "http://localhost:3000/api/v1";
new Vue({
  el: "#app",
  data() {
    return {
      userDialog: false,
      billDialog: false,
      // 用户表单
      userForm: {
        user: "",
        pass: "",
        remarks: "",
      },
      // 用户列表
      usersData: [],
      // 账单表单
      billForm: {
        explanation: "",
        users: [],
        money: "",
        operation: null,
      },
      // 账单列表
      billData: [],
      // 用户个人账单列表
      userBilly: [],
    };
  },
  methods: {
    // 切换标顶部签页
    clickTab1(tab, event) {
      if (tab != undefined) {
        if (tab.label == "管理用户") {
          this.getUser();
        } else if (tab.label == "管理账单") {
          this.getBill();
        } else if (tab.label == "可视化") {
          this.allEchart();
        }
      }
    },
    // 用户
    async getUser() {
      const { data: res } = await axios.get("/users/read");
      this.usersData = res.data;
      // console.log(this.usersData);
    },
    async delUser(row) {
      const { data: res } = await axios.post("/users/del", { _id: row._id });
      // console.log(res.meta);s
      if (res.meta.status == 200) {
        this.getUser();
        this.$message({
          message: res.meta.msg,
          type: "warning",
        });
      }
    },
    async addUser() {
      const { data: res } = await axios.post("/users/add", this.userForm);
      if (res.meta.status == 200) {
        // console.log(res);
        this.getUser();
        this.$message({
          message: res.data.user + "  " + res.meta.msg,
          type: "success",
        });
        this.restUserForm();
      }
    },
    async upUser() {
      const { data: res } = await axios.post("/users/up", this.userForm);
      if (res.meta.status == 200) {
        // console.log(res);
        this.getUser();
        this.$message({
          message: res.meta.msg,
          type: "success",
        });
        this.restUserForm();
        this.userDialog = false;
      }
    },
    async editUser(row) {
      this.userDialog = true;
      const { data: res } = await axios.get("/users/read?_id=" + row._id);
      this.userForm = res.data[0];
    },
    // 清空用户表单
    restUserForm() {
      this.userForm = {
        user: "",
        pass: "",
        remarks: "",
      };
    },

    // 切换个人账单菜单
    async clickUserBill(tab, event) {
      if (tab != undefined && tab.index > 1) {
        this.getUserBill(tab.label);
        // let data = [];
        // this.billData.forEach((item, index) => {
        //   if (item.users.indexOf(tab.label) == 0) {
        //     // console.log(item.users);
        //     data.push(item);
        //   }
        // });
        // // console.log(data);
        // this.userBilly = data;
      }
    },
    // 账单
    async getBill() {
      const { data: res } = await axios.get("/bill/read");
      // console.log(res);
      this.billData = res.data;
    },
    getUserBill(user) {
      let data = [];
      this.billData.forEach((item, index) => {
        if (item.users.indexOf(user) == 0) {
          // console.log(item.users);
          data.push(item);
        }
      });
      // console.log(data);
      this.userBilly = data;
    },
    async addBill() {
      let param = this.billForm;
      param.money = param.operation ? param.money : -param.money;
      param.users = param.users.toString();
      const { data: res } = await axios.post("/bill/add", param);
      if (res.meta.status == 200) {
        // console.log(res);
        this.getBill();
        this.$message({
          message: res.meta.msg,
          type: "success",
        });
        this.restBillForm();
      }
    },
    async delBill(row) {
      const { data: res } = await axios.post("/bill/del", { _id: row._id });
      // console.log(res.meta);s
      if (res.meta.status == 200) {
        this.getBill();
        this.$message({
          message: res.meta.msg,
          type: "warning",
        });
      }
    },
    async editBill(row) {
      this.billDialog = true;
      const { data: res } = await axios.get("/bill/read?_id=" + row._id);
      res.data[0].users = res.data[0].users.split(",");
      let form = res.data[0];
      // console.log(form);
      form.users = form.users.map((item, index) => {
        let users = form.users[index].toString();
        return users;
      });
      this.billForm = form;
      // console.log(this.billForm);
    },
    async upBill() {
      let param = this.billForm;
      console.log(param.users);
      param.users = param.users.toString();

      param.money = param.operation
        ? Math.abs(param.money)
        : param.money < 0
          ? param.money
          : -param.money;
      const { data: res } = await axios.post("/bill/up", param);
      if (res.meta.status == 200) {
        // console.log(res);
        this.getBill();
        this.$message({
          message: res.meta.msg,
          type: "success",
        });
        this.restBillForm();
        this.billDialog = false;
      }
    },
    // 清空账单表
    restBillForm() {
      this.billForm = {
        explanation: "",
        users: [],
        money: "",
        operation: "",
      };
    },
    // 总计-账单
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总计";
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        if (index === 5) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] = sums[index].toFixed(2);
          sums[index] += " 元";
        } else {
          sums[index] = " ";
        }
      });
      return sums;
    },
    filterHandler(value, row) {
      return row.operation === value;
    },

    // 切换可视化菜单
    async clickEchart(tab, event) {
      if (tab != undefined) {
        if (tab.label == "全部") {
          this.allEchart();
        } else if (tab.label == "日历") {
          this.calendarEchart();
        }
      }
      // 用户
      if (tab != undefined && tab.index > 1) {
        // console.log(tab.label);
        this.getUserBill(tab.label);
        this.userEchart(tab.label)
      }
    },
    // 可视化
    async allEchart() {
      // 获取数据
      const { data: res } = await axios.get("/bill/read");
      let billData = res.data;
      // console.log(billData);
      // 处理billData
      let dest = [];
      let map = {};
      for (let i = 0; i < billData.length; i++) {
        // 金额
        var ai = billData[i];
        if (!map[ai.operation]) {
          dest.push({
            index: ai.operation,
            data: [ai]
          });
          map[ai.operation] = ai;
        } else {
          for (var j = 0; j < dest.length; j++) {
            var dj = dest[j];
            if (dj.operation == ai.operation) {
              dj.data.push(ai);
              break;
            }
          }
        }
      }
      console.log(dest);

      var AllChart = echarts.init(document.getElementById("allBill"));
      option = {
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      AllChart.setOption(option);
    },
    calendarEchart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("calendarChar"));

      var cellSize = [80, 80];
      var pieRadius = 30;

      function getVirtulData() {
        var date = +echarts.number.parseDate("2017-02-01");
        var end = +echarts.number.parseDate("2017-03-01");
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time < end; time += dayTime) {
          data.push([
            echarts.format.formatTime("yyyy-MM-dd", time),
            Math.floor(Math.random() * 10000),
          ]);
        }
        return data;
      }

      function getPieSeries(scatterData, chart) {
        return scatterData.map(function (item, index) {
          var center = chart.convertToPixel("calendar", item);
          return {
            id: index + "pie",
            type: "pie",
            center: center,
            label: {
              normal: {
                formatter: "{c}",
                position: "inside",
              },
            },
            radius: pieRadius,
            data: [
              { name: "工作", value: Math.round(Math.random() * 24) },
              { name: "娱乐", value: Math.round(Math.random() * 24) },
              { name: "睡觉", value: Math.round(Math.random() * 24) },
            ],
          };
        });
      }

      function getPieSeriesUpdate(scatterData, chart) {
        return scatterData.map(function (item, index) {
          var center = chart.convertToPixel("calendar", item);
          return {
            id: index + "pie",
            center: center,
          };
        });
      }

      var scatterData = getVirtulData();

      option = {
        tooltip: {},
        legend: {
          data: ["工作", "娱乐", "睡觉"],
          bottom: 20,
        },
        calendar: {
          top: "middle",
          left: "center",
          orient: "vertical",
          cellSize: cellSize,
          yearLabel: {
            show: false,
            fontSize: 30,
          },
          dayLabel: {
            margin: 20,
            firstDay: 1,
            nameMap: [
              "星期日",
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
            ],
          },
          monthLabel: {
            show: false,
          },
          range: ["2017-02"],
        },
        series: [
          {
            id: "label",
            type: "scatter",
            coordinateSystem: "calendar",
            symbolSize: 1,
            label: {
              show: true,
              formatter: function (params) {
                return echarts.format.formatTime("dd", params.value[0]);
              },
              offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
              fontSize: 14,
            },
            data: scatterData,
          },
        ],
      };

      myChart.setOption(option)

      var pieInitialized;
      setTimeout(function () {
        pieInitialized = true;
        myChart.setOption({
          series: getPieSeries(scatterData, myChart),
        });
      }, 10);

      app.onresize = function () {
        if (pieInitialized) {
          myChart.setOption({
            series: getPieSeriesUpdate(scatterData, myChart),
          });
        }
      };

    },
    userEchart(user) {
      // console.log(user);
      var myChart = echarts.init(document.getElementsByClassName("userChar" + '_' + user)[0]);
      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
      };
      myChart.setOption(option)
    },
  },
  mounted() {
    this.clickTab1();
    this.getUser();
  },
});
