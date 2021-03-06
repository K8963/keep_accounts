// 引入模型
const { createM, listM, delM, upM } = require(process.cwd() + "/Models/bill");

/**
 * @api {post} /bill/add  新增账单
 * @apiName addList
 * @apiGroup bill
 * @apiParam {String} users 人物
 * @apiParam {String} explanation  说明
 * @apiParam {String} money  金额
 * @apiParam {Boolean} operation 收入T\支出F
 * @apiParam {String} date 时间
 * @apiParam {String} surplus 剩余金额
 * @apiSuccess {Number} meta.status 状态码
 * @apiSuccess {String} meta.msg 描述
 */
const addList = async (req, res) => {
  let postData = req.body;
  // console.log(postData);
  let rs = await createM(postData);
  if (rs) {
    // console.log(rs);
    // 发送到浏览器
    res.send({
      meta: { status: 200, msg: "添加成功" },
      data: rs,
    });
  } else {
    res.send({
      meta: { status: 500, msg: "添加失败" },
      data: null,
    });
  }
};

/**
 * @api {post} /bill/del  删除账单
 * @apiName delList
 * @apiGroup bill
 * @apiParam {String} _id ID
 * @apiSuccess {Number} meta.status 状态码
 * @apiSuccess {String} meta.msg 描述
 */
const delList = async (req, res) => {
  let postData = req.body;
  // console.log(postData);
  let data = await delM(postData);
  if (data) {
    res.send({
      meta: { status: 200, msg: "删除成功" },
      data: data,
    });
  } else {
    res.send({
      meta: { status: 500, msg: "删除失败" },
      data: null,
    });
  }
};

/**
 * @api {post} /bill/up  修改账单
 * @apiName upList
 * @apiGroup bill
 * @apiParam {String} _id ID
 * @apiParam {String} users 人物
 * @apiParam {String} explanation  说明
 * @apiParam {String} money  金额
 * @apiParam {Boolean} operation 收入T\支出F
 * @apiParam {String} date 使用时间
 * @apiParam {String} createDate 创建记录的时间
 * @apiParam {String} surplus 剩余金额
 * @apiSuccess {Number} meta.status 状态码
 * @apiSuccess {String} meta.msg 描述
 */
const upList = async (req, res) => {
  let postData = req.body;
  // console.log(postData);
  let data = await upM(postData);
  if (data) {
    res.send({
      meta: { status: 200, msg: "修改成功" },
      data: data,
    });
  } else {
    res.send({
      meta: { status: 500, msg: "修改失败" },
      data: null,
    });
  }
};

/**
 * @api {get} /bill/read  查询账单
 * @apiName readList
 * @apiGroup bill
 * @apiParam {String} users 人物
 * @apiParam {String} explanation  说明
 * @apiParam {String} money  金额
 * @apiParam {Boolean} operation 收入T\支出F
 * @apiParam {String} date 使用时间
 * @apiParam {String} createDate 创建记录的时间
 * @apiParam {String} surplus 剩余金额
 * @apiSuccess {Number} meta.status 状态码
 * @apiSuccess {String} meta.msg 描述
 * @apiSuccess {String} data 查询返回数据
 */
const readList = async (req, res) => {
  let getData = req.query;
  // console.log(getData);
  let data = await listM(getData);
  if (data) {
    res.send({
      meta: { status: 200, msg: "查询成功" },
      data: data,
    });
  } else {
    res.send({
      meta: { status: 500, msg: "查询失败" },
      data: null,
    });
  }
};
// 导出
module.exports = {
  addList,
  delList,
  upList,
  readList,
};
