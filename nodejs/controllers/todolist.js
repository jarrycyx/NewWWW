var writeTodayListToJson = require("./../tools/json_reader");
var JsonReader = require("./../tools/json_reader");
var delTodayList = require("./../tools/json_reader");
var parseQueryStr = require("./../tools/http_tools");

var rootPath = process.env.HOME;
if (!rootPath) rootPath = "D:/11PRojects/GIT";

var td_get = async(ctx, next) => {
    console.log("todo_get");
    var dataList = parseQueryStr(ctx.url);
    console.log(dataList);
    var date = dataList.date;
    var todayListStr = await JsonReader.readTodayListFromJson(date);
    ctx.response.body = todayListStr;
};

var td_process = async(ctx, next) => {
    console.log("todo_process");
    var dataList = parseQueryStr(ctx.url);
    console.log(dataList);
    var type = dataList.type;
    var date = dataList.date;
    if (type == 0) {
        await JsonReader.delTodayList(date, dataList.idx);
    } else if (type == 1) {
        var newcontent = dataList.content;
        var todoItem = {
            createTime: new Date().getTime(),
            scheTime: "",
            content: newcontent,
            status: 0 //0: active, 1: accomplished, 2: deleted
        };
        await JsonReader.addTodayList(date, todoItem);
    }
    var todayListStr = await JsonReader.readTodayListFromJson(date);
    ctx.response.body = todayListStr;
};


module.exports = {
    'GET /todolist/': td_get,
    'GET /todolist/': td_process,
};