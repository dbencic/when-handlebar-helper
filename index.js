function quoteIfString(literal) {
    if (typeof literal === 'string' || literal instanceof String){
        return "'" + literal + "'";
    }else {
        return literal;
    }
}

function when(expression, options) {
    if(arguments.length != 2) {
        throw new Error("There should be only one expression enclosed in quotes (example {{#when 'a==b'}})");
    }
    var root = options.data.root;
    var topcontainer = (global)?global:window;
    Object.getOwnPropertyNames(root).forEach((function(name){
        topcontainer[name] = root[name];
    }));
    // var options = arguments[arguments.length - 1];
    // console.log(options);
    // var expr = [];
    // for(var i=0; i<arguments.length - 1; i++) {
    //     //1,3
    //     expr.push((i % 2 == 0)?quoteIfString(arguments[i]):arguments[i]);
    // }
    var result = eval(expression);
    if(result) {
        return options.fn(this);
    }else {
        return options.inverse(this);
    }
};

module.exports = when;