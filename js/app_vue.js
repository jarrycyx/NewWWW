new Vue({
    el: '#earncard',
    data: {
        earncard_message: 'Hello Vue!'
    },
    methods: {
        earncard_ChangeMessage: function() {
            thisVue = this;
            var jqxhr = $.get('vue', function(data, status) {
                thisVue.earncard_message = 'Hello LaraBase2!' + data;
            });
        }
    }
})