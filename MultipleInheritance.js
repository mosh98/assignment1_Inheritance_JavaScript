var myObject = {}


myObject.create = function (protoList) {

    var temp = {}
    temp.__proto__ = this

    if(protoList === null){
        temp.list = []
    }else {
        temp.list = protoList
    }
    return temp
}

myObject.call = function (nameOfFunction, parametres) {
    var funcName = nameOfFunction;
    var arr = this.list
    var arrayLength = arr.length;



    for (var i = 0; i < arrayLength; i++) {
        var okoko = arr[i];
        if (okoko.hasOwnProperty(funcName)) {
            console.log("function Exist ? :" + okoko.hasOwnProperty(funcName))

            return arr[i][funcName](parametres);
        }
    }


}


var obj0 = myObject.create(null);
obj0.func = function (arg) {return "func0: " + arg;};
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function (arg) {return "func2: " + arg;};
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);
/*
obj0 = myObject.create(null);
obj0.func = function (arg) {
    return "func0: " + arg;};
obj1 = myObject.create([obj0]);
obj2 = myObject.create([]);
obj3 = myObject.create([obj2, obj1]);
result = obj3.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);*/

/*
obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
result = obj0.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);*/
