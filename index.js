function quoteIfString(literal) {
    if (typeof literal === 'string' || literal instanceof String){
        return "'" + literal + "'";
    }else {
        return literal;
    }
}

function when(first, expression, second, options) {
    if(arguments.length != 4) {
        throw new Error("expected exactly 3 arguments. 'when' helper usage: {{#when first operator second}}. example: {{#when mynumber == 2}}. For pure boolean check use built in #if helper");
    }
    var result = eval(quoteIfString(first) + expression + quoteIfString(second));
    if(result) {
        return options.fn(this);
    }else {
        return options.inverse(this);
    }
};

module.exports = when;