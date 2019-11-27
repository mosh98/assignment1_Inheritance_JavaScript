
var myObject = {

}



myObject.create = function (a) {
    var temp = {}
   temp.__proto__ = this
    temp.pList = a
    return temp
}

myObject.call = function (nameOfFunction, parametres) {
    var funcName = nameOfFunction;
    var parametreName = parametres;

    var arr = Array.from(myObject.create)
    var arrayLength = arr.length;
    /*    if(this.prototype.hasOwnProperty(funcName)){
            var temp = this.funcName;
            return temp(funcName);
        }*/

    console.log(arr)
    for (var i = 0; i < arrayLength; i++) {
        console.log("call loop initated");

        //Do something
        //console.log(arr[i].hasOwnProperty(nameOfFunction));
        var okoko = arr[i];
        if ( okoko.hasOwnProperty( nameOfFunction )) {
            console.log("halo")
            var temp = arr[i];
            return temp(parametreName);
        }
    }
}


var obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function(arg) { return "func2: " + arg; };
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);
