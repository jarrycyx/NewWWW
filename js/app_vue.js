new Vue({
    el: '#earncard',
    data: {
        candle_message: 'OFF'
    },
    methods: {
        earncard_ChangeMessage: function() {
            thisVue = this;
            var jqxhr = $.get('vue', function(data, status) {
                thisVue.candle_message = 'ON' + data;
            });
        }
    }
})