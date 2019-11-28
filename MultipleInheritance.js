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

    var b = [];

    /**
     * Variables for the arraylist*/
    var arr = this.list
    var arrayLength = arr.length;

    if(this.hasOwnProperty(nameOfFunction)){
        return this[nameOfFunction](parametres)
    }
    for (var i = 0; i < arrayLength; i++) {
        var currentObject = arr[i];
        if (currentObject.hasOwnProperty(nameOfFunction)) {
           // console.log("function Exist ? :" + currentObject.hasOwnProperty(nameOfFunction))
            b.push(arr[i][nameOfFunction](parametres));
            // return arr[i][nameOfFunction](parametres);
        } else if (currentObject.list.length != 0) {
            var tempArr = currentObject.list;
            tempArr.forEach(function (item,index,array){
                if (item.hasOwnProperty(nameOfFunction)) {
                    b.push(item[nameOfFunction](parametres));
                }
            })

        }
    }
    //console.log("The arrayList has these elements " + b);

    return b[0];

}

/*** Alla test Program*/

var obj0 = myObject.create(null);
obj0.func = function (arg) {return "func0: " + arg;};
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function (arg) {return "func2: " + arg;};
var obj3 = myObject.create([obj1, obj2]);
var result = obj2.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);
/*

obj0 = myObject.create(null);
obj0.func = function (arg) {
    return "func0: " + arg;};
obj1 = myObject.create([obj0]);
obj2 = myObject.create([]);
obj3 = myObject.create([obj2, obj1]);
result = obj3.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);
*/


/*
obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
result = obj0.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);
*/
