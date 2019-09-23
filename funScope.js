//Test for Function Scope!
var myFunction = function(a = 15) {
    var b = 2;
    console.log(a + b);
    function prinln() {
        
        console.log("a + c");
    }
}

//This wont work !
//println();
myFunction(a = 18);
myFunction();
//console.log(a + b);
console.log(a);


//Hiding In Plain Scope
var dosomething = function (a) {
    b = a + somethingelse(a + 1);
    console.log(b);

}

var somethingelse = function(a) {
    return a*2;
}

dosomething(1);
console.log("a is :", a);
//Collision Avoidance
var foo = function (more = 666) {
    console.log("value a in foo is :", a);
    function bar(a) {
        let i = 3;//Here need let rather than var!
        console.log(a + i);
    }

    for (var i = 0; i < 10; i++) {
        bar(i*2);
    }
}

foo(more = 666);

//Function As Scopes
//consider the above examples, there will be another way to express it:
console.log("Function As Scope:");
(function foo1 (more = 0) {
    var more = 0;
    console.log("value a in foo is :", a);
    function bar(a) {
        let i = 3;//Here need let rather than var!
        console.log(a + i);
    }

    for (var i = 0; i < 10; i++) {
        bar(i*2);
        var more = more + 1
    }

}) ();

console.log(more);

//Anonymous function
setTimeout(function () {
    console.log("I have waited 3 s!");
}, 3000);