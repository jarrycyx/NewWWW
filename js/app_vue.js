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
        t_index: 1,
        candle_message: '0 W',
        items: ""
    },
    methods: {
        click1_Done: function(index) {
            console.log(index);
        }
    }
});

$.ajax({
    url: 'todolist/date',
    type: 'get',
    headers: {
        'Authorization': 'APPCODE eef1833dbc5748cc86a6419ea0f92d9a'
    },
    //data : 'type=shehui',
    //dataType : 'json',
    success: function(msg) {
        todolistVue.items = JSON.parse(msg).slice(0, 6);
    },
    error: function(err) {
        data = `[{"createTime":1561873087985,"scheTime":1561873087985,"content":"一个待办事项0_default","status":0},{"createTime":1561873087989,"scheTime":1561879087989,"content":"一个待办事项1","status":0},{"createTime":1561873087990,"scheTime":1561885087990,"content":"一个待办事项2","status":0},{"createTime":1561873087990,"scheTime":1561891087990,"content":"一个待办事项3","status":0},{"createTime":1561873087991,"scheTime":1561897087991,"content":"一个待办事项4","status":0},{"createTime":1561873087992,"scheTime":1561903087992,"content":"一个待办事项5","status":0},{"createTime":1561873087993,"scheTime":1561909087993,"content":"一个待办事项6","status":0},{"createTime":1561873087994,"scheTime":1561915087994,"content":"一个待办事项7","status":0},{"createTime":1561873087994,"scheTime":1561921087994,"content":"一个待办事项8","status":0},{"createTime":1561873087995,"scheTime":1561927087995,"content":"一个待办事项9","status":0}]`;
        todolistVue.items = JSON.parse(data).slice(0, 6);
    }

});

console.log("log");