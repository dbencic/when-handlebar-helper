var Handlebars = require('handlebars');
var when = require("./index");
var source = "<html><body>"
    + "<p>{{#when mytext '==' 'sometext'}}text is sometext{{else}}text is NOT sometext, it is {{mytext}}{{/when}}</p>"
    + "{{#when a '==' 1}}<p>A is 1</p>{{/when}}"
    + "{{#when a '<=' 1}}<p>A is <= 1</p>{{/when}}"
    + "<p>{{#when a '>' 1}}A is > 1{{else}}A is not > 1, it is {{a}}{{/when}}</p>"
    + "<p>{{#when a '==' B}}A is EQUAL TO B{{else}}A is not equal to B. It is {{#when a '<=' b}}less or equal B{{else}}greater than b{{/when}}{{/when}}</p>"
    + "<p>{{#when mytext '==' 'sometext'}}Again, mytext is sometext{{else when mytext '!=' 'sometext'}}mytext is NOT sometext checked inside else block{{/when}}</p>"
    + "</body></html>";
var template = Handlebars.compile(source);
 
var data = { "a": 1, b: 2, mytext: "sometext1"};

Handlebars.registerHelper("when", when);

var result = template(data);
console.log("result: " + result);