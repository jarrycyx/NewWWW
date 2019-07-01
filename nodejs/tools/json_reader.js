'use strict '

var fs = require('fs');
var rootPath = process.env.HOME;
if (!rootPath) rootPath = "D:/11PRojects/GIT";

var todoItem = {
    createTime: "",
    scheTime: "",
    content: "一个待办事项",
    status: 0 //0: active, 1: accomplished, 2: deleted
};

Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

const readFile = function(src) {
    return new Promise((resolve, reject) => {
        fs.readFile(src, (err, data) => {
            if (err) {
                reject(err);
                console.log(err);
            } else resolve(data.toString());
        });
    });
};

const writeFile = function(src, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(src, data, (err) => {
            if (err) reject(err);
            resolve("DONE");
        });
    });
};

async function readTodayListFromJson(date) {
    var dataStr = await readFile(rootPath + "/jarrycyx/WWW-data/" + date + ".json");
    console.log(dataStr);
    return dataStr;
}

async function writeTodayListToJson(todayListObj, date) {
    fs.writeFile(rootPath + "/jarrycyx/WWW-data/" + date + ".json", JSON.stringify(todayListObj), function(err) {
        if (!err) console.log("success");
        else console.log(err);
    })
}

async function delTodayList(date, index) {
    var dataStr = await readFile(rootPath + "/jarrycyx/WWW-data/" + date + ".json");
    var dataObj = JSON.parse(dataStr);
    console.log(dataObj);
    dataObj.remove(index, index);
    var rea = await writeFile(rootPath + "/jarrycyx/WWW-data/" + date + ".json", JSON.stringify(dataObj));
    //readTodayListFromJson(date);
    return rea;
}

async function addTodayList(date, itemObj) {
    var dataStr = await readFile(rootPath + "/jarrycyx/WWW-data/" + date + ".json");
    var dataObj = JSON.parse(dataStr);
    dataObj.push(itemObj);
    var rea = await writeFile(rootPath + "/jarrycyx/WWW-data/" + date + ".json", JSON.stringify(dataObj));
    return rea;
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

var date = "20190701";

async function something() {
    await writeTodayListToJson(todayList, date);
    await delTodayList(date, 2);
    await readTodayListFromJson(date);

    var newItem = Object.assign({}, todoItem);
    newItem.content = "增加的item";
    await addTodayList(date, newItem);
    await readTodayListFromJson(date);
}

//something();
module.exports = {
    writeTodayListToJson: writeTodayListToJson,
    readTodayListFromJson: readTodayListFromJson,
    delTodayList: delTodayList,
    addTodayList: addTodayList
}