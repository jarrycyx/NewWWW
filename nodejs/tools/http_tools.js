function parseQueryStr(queryStr) {
    let queryData = {}
    let newStrLi = queryStr.split('?');
    queryStr = newStrLi[1];
    let queryStrList = queryStr.split('&')
    console.log(queryStrList)
    for (let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=')
        queryData[itemList[0]] = decodeURIComponent(itemList[1])
    }
    console.log(JSON.stringify(queryData));
    return queryData;
}


module.exports = parseQueryStr;

//parseQueryStr("http://localhost:3000/todolist/?type=0&idx=3&date=20190701");