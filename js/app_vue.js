new Vue({
    el: '#earncard',
    data: {
        candle_message: '0 W'
    },
    methods: {
        earncard_ChangeMessage: function() {
            thisVue = this;
            var jqxhr = $.get('devices/candle', function(data, status) {
                thisVue.candle_message = 'ON' + data;
            });
        }
    }
})