
var a = [];

var b = function () {
    console.log("ITS B");
}
var c = function () {
    console.log("ITS C");
}
var d = function () {
    console.log("ITS D");
}
var e = function () {
    console.log("ITS E");
}

a.push(b);
a.push(c);
a.push(d);
a.push(e);


var aloha = {};

aloha.call = function(funcName) {

    var arrayLength = a.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log("loop initiated");
        //Do something
        if (a[i].hasOwnProperty(funcName) ){
            console.log("=================== ")
            console.log("      ")
            console.log("      ")
            console.log("      ")
            console.log("this condition has been executed")
            return a[i];
        }
    }
}


var obj0 = aloha.call('d');
