function keyUp(e) {
    var currKey = 0,
        e = e || event;
    currKey = e.keyCode || e.which || e.charCode;
    //var keyName = String.fromCharCode(currKey);
    //alert("按键码: " + currKey + " 字符: " + keyName);
    if (currKey == 9) document.getElementById('cmdInput').focus()
}

document.onkeyup = keyUp;

Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};



var earncardVue = new Vue({
    el: '#earncard',
    data: {
        candle_message: '0 W'
    },
    methods: {
        earncard_ChangeMessage: function() {
            thisVue = this;
            var jqxhr = $.get('devices/candle', function(data, status) {
                thisVue.candle_message = data;
            });
        }
    }
});

var todolistVue = new Vue({
    el: '#todolist',
    data: {
        candle_message: '0 W',
        items: "",
        checker: [0, 0, 0, 0, 0]
    },
    methods: {
        click1_Done: function(index) {
            var thisVue = this;
            $.ajax({
                url: 'todolist/?type=0&idx=' + index + '&date=20190701', //type: 0:del, 1:add
                type: "GET",
                dataType: "json",
                //dataType : 'json',
                success: function(msg) {
                    thisVue.checker[index] = 0;
                    refreshTodoItems();
                },
                error: function(err) {
                    thisVue.checker[index] = 0;
                    refreshTodoItems();
                }
            });
        }
    }
});


function cmdKeyClick() {
    cmdVue.cmd_Click();
    console.log("cmdclick");
}

var cmdVue = new Vue({
    el: "#cmd_inputbox",
    data: {
        command: 'CMD'
    },
    methods: {
        cmd_Click: function() {
            var cmd_str = this.command;
            $.ajax({
                url: 'todolist/?type=1&content=' + cmd_str + '&date=20190701', //type: 0:del, 1:add
                type: "GET",
                dataType: "json",
                success: function(msg) {
                    refreshTodoItems();
                }
            });
        }
    }
});

function cmdDropKeyClick() {
    cmdDropVue.cmd_Click();
    console.log("cmdDropclick");
}

var cmdDropVue = new Vue({
    el: "#cmd_drop_inputbox",
    data: {
        command: 'CMD'
    },
    methods: {
        cmd_Click: function() {
            var cmd_str = this.command;
            $.ajax({
                url: 'todolist/?type=1&content=' + cmd_str + '&date=20190701', //type: 0:del, 1:add
                type: "GET",
                dataType: "json",
                success: function(msg) {
                    refreshTodoItems();
                }
            });
        }
    }
});


function refreshTodoItems() {
    $.ajax({
        url: 'todolist/',
        data: { date: "20190701" }, //type: 0:del, 1:add
        type: 'get',
        success: function(msg) {
            todolistVue.items = JSON.parse(msg).slice(0, 6);
        },
        error: function(err) {
            data = `[{"createTime":1561873087985,"scheTime":1561873087985,"content":"一个待办事项0_未连接","status":0},{"createTime":1561873087989,"scheTime":1561879087989,"content":"一个待办事项1","status":0},{"createTime":1561873087990,"scheTime":1561885087990,"content":"一个待办事项2","status":0},{"createTime":1561873087990,"scheTime":1561891087990,"content":"一个待办事项3","status":0},{"createTime":1561873087991,"scheTime":1561897087991,"content":"一个待办事项4","status":0},{"createTime":1561873087992,"scheTime":1561903087992,"content":"一个待办事项5","status":0},{"createTime":1561873087993,"scheTime":1561909087993,"content":"一个待办事项6","status":0},{"createTime":1561873087994,"scheTime":1561915087994,"content":"一个待办事项7","status":0},{"createTime":1561873087994,"scheTime":1561921087994,"content":"一个待办事项8","status":0},{"createTime":1561873087995,"scheTime":1561927087995,"content":"一个待办事项9","status":0}]`;
            todolistVue.items = JSON.parse(data).slice(0, 6);
        }
    });
}

refreshTodoItems();
console.log("log");