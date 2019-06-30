'use strict '

var fs = require('fs');
var rootPath = "D:/11PRojects/GIT" || process.env.HOME;

var todoItem = {
    createTime: "",
    scheTime: "",
    content: "一个待办事项",
    status: 0 //0: active, 1: accomplished, 2: deleted
};

const readFile = function(src) {
    return new Promise((resolve, reject) => {
        fs.readFile(src, (err, data) => {
            if (err) reject(err);
            resolve(data.toString());
        });
    });
};

async function readTodayListFromJson(filename) {
    var dataStr = await readFile(filename);
    return dataStr;
}

async function writeTodayListToJson(data, filename) {
    fs.writeFile(filename, JSON.stringify(todayList), function(err) {
        if (!err) console.log("success");
        else console.log(err);
    })
}

var todayList = [];
for (var i = 0; i < 10; i++) {
    var newItem = Object.assign({}, todoItem);
    newItem.createTime = new Date().getTime();
    newItem.content = "一个待办事项" + i;
    newItem.scheTime = newItem.createTime + i * 1000 * 60 * 100;
    todayList.push(newItem);
    console.log(newItem);
}
writeTodayListToJson(todayList, rootPath + "/jarrycyx/WWW-data/1.json");
readTodayListFromJson(rootPath + "/jarrycyx/WWW-data/1.json");

module.exports = writeTodayListToJson;
module.exports = readTodayListFromJson;