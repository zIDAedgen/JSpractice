var colliison = function () {
    var bar = function (a) {
        let i = 3;
        console.log(i + a);
    }

    for (var i = 0; i < 10; i++ ) {
        bar(i*2);
    }
}
colliison();