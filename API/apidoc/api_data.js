define({ "api": [
  {
    "type": "post",
    "url": "/bill/add",
    "title": "新增账单",
    "name": "addList",
    "group": "bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "users",
            "description": "<p>人物</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "explanation",
            "description": "<p>说明</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "operation",
            "description": "<p>收入T\\支出F</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surplus",
            "description": "<p>剩余金额</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.msg",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Controllers/bill.js",
    "groupTitle": "bill"
  },
  {
    "type": "post",
    "url": "/bill/del",
    "title": "删除账单",
    "name": "delList",
    "group": "bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.msg",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Controllers/bill.js",
    "groupTitle": "bill"
  },
  {
    "type": "get",
    "url": "/bill/read",
    "title": "查询账单",
    "name": "readList",
    "group": "bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "users",
            "description": "<p>人物</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "explanation",
            "description": "<p>说明</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "operation",
            "description": "<p>收入T\\支出F</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>使用时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createDate",
            "description": "<p>创建记录的时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surplus",
            "description": "<p>剩余金额</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.msg",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>查询返回数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Controllers/bill.js",
    "groupTitle": "bill"
  },
  {
    "type": "post",
    "url": "/bill/up",
    "title": "修改账单",
    "name": "upList",
    "group": "bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "users",
            "description": "<p>人物</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "explanation",
            "description": "<p>说明</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "operation",
            "description": "<p>收入T\\支出F</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>使用时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createDate",
            "description": "<p>创建记录的时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surplus",
            "description": "<p>剩余金额</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.msg",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Controllers/bill.js",
    "groupTitle": "bill"
  },
  {
    "type": "post",
    "url": "/users/add",
    "title": "新增用户",
    "name": "addList",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.msg",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Controllers/user.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/users/del",
    "title": "删除用户",
    "name": "delList",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.msg",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Controllers/user.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/add",
    "title": "查询用户",
    "name": "readList",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.msg",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Controllers/user.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/users/add",
    "title": "修改用户",
    "name": "upList",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meta.status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta.msg",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Controllers/user.js",
    "groupTitle": "users"
  }
] });
