new Vue({
    el: '#earncard',
    data: {
        earncard_message: 'Hello Vue!'
    },
    methods: {
        earncard_ChangeMessage: function() {
            var jqxhr = $.get('http://localhost:3000/vue', function(data, status) {
                this.earncard_message = 'Hello LaraBase1!' + data;
            });
        }
    }
})