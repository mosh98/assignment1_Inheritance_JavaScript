
var myObject = {

}


myObject.create = function (protoList) {
    var temp = {}
   temp.__proto__ = this
    temp.list = protoList
    return temp
}

myObject.call = function (nameOfFunction, parametres) {
    var funcName = nameOfFunction;
    var arr = this.list
    var arrayLength = arr.length;

        var smth;

    for (var i = 0; i < arrayLength; i++) {

        var okoko = arr[i];
        if (okoko.hasOwnProperty(funcName)) {
            console.log("function Exist ? :" + okoko.hasOwnProperty(funcName))

            var temp = arr[i];
            smth = arr[i];

           // return smth.funcName.apply(parametres)
            break;
        }
    }

    return smth[funcName](parametres);


}


var obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function(arg) { return "func2: " + arg; };
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);
