
var myFunction = function(str, a) {
    eval(str);
    console.log(a + b);
}
var b = 10;
myFunction("b = 12",12);


//use strict mode or not? it is a question
console.log("------------------------------------------------");


var nonStrict = function(string) {
    eval(string);
    //console.log(nonpara);
    console.log(a);
}
console.log("without using strict mode:")
nonStrict("a = 10");


console.log("------------------------------------------------");

//console.log(nonpara);

var Strict = function(str) {
    
    // "use strict";
    eval(str);
    //console.log(nonpara);
    console.log(a);
}
console.log("using 'use strict' :");
//Strict("\'use strict\';var c = 108;console.log(c)");
Strict("a = 11")
