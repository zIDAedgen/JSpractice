//Lexical Scope
var init = function () {
    var name = "Aedgen";
    var display = function () {
        console.log(name);
    }
    display();
}
init();

//Whereas the closure is a little bit diffrernt
var makeFunc = function () {
    var name = "Mozilla";
    var display = function () {
        console.log(name);
    }
    return display;
}

var myFunc = makeFunc();
myFunc();

