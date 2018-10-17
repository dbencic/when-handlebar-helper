function quoteIfString(literal) {
    if (typeof literal === 'string' || literal instanceof String){
        return "'" + literal + "'";
    }else {
        return literal;
    }
}

function when() {
    var options = arguments[arguments.length - 1];
    console.log(options);
    var expr = [];
    for(var i=0; i<arguments.length - 1; i++) {
        //1,3
        expr.push((i % 2 == 0)?quoteIfString(arguments[i]):arguments[i]);
    }
    var result = eval(expr.join(" "));
    if(result) {
        return options.fn(this);
    }else {
        return options.inverse(this);
    }
};

module.exports = when;