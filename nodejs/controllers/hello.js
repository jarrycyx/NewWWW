var fn_hello = async(ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};

var fn_vue = async(ctx, next) => {
    ctx.response.body = "from server localhost: hello";
};

var fn_vue = async(ctx, next) => {
    ctx.response.body = "from server localhost: vuebut";
};

module.exports = {
    'GET /hello/:name': fn_hello,
    'GET /vue': fn_vue,
    'GET /vue/but': fn_vue_but
};