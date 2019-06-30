var writeTodayListToJson = require("./../tools/json_reader");
var readTodayListToJson = require("./../tools/json_reader");


var rootPath = process.env.HOME;
if (!rootPath) rootPath = "D:/11PRojects/GIT";

var td_hello = async(ctx, next) => {
    console.log("todo");
    var date = ctx.params.date;
    var todayListStr = await readTodayListToJson(rootPath + "/jarrycyx/WWW-data/1.json");
    ctx.response.body = todayListStr;
};


module.exports = {
    'GET /todolist/:date': td_hello,
};