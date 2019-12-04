var myObject = {}


myObject.create = function (protoList) {

    var temp = {}
    temp.__proto__ = this;

    if(protoList === null){
        temp.list = []
    }else {
        temp.list = protoList
    }
    return temp
}


myObject.call = function (nameOfFunction, parametres){

    var b = [];

    /**
     * Variables for the arraylist*/
    var arr = this.list
    var arrayLength = arr.length;

    if (this.hasOwnProperty(nameOfFunction)) {
        return this[nameOfFunction](parametres)
    }

    for (var i = 0; i < arrayLength; i++) {
        var currentObject = arr[i];
        if (currentObject.hasOwnProperty(nameOfFunction)) {
            b.push(arr[i][nameOfFunction](parametres));

        } else if (currentObject.list.length != 0) {
            var tempArr = currentObject.list;
            tempArr.forEach(function (item, index, array) {
                if (item.hasOwnProperty(nameOfFunction)) {
                    b.push(item[nameOfFunction](parametres));
                }
            })

        }
    }
    return b[0];
}



myObject.addPrototype = function(newPrototype){

   if(newPrototype.list != 0){
        if(newPrototype.list.indexOf(this) == -1){
            newPrototype.list.forEach(obj => obj.addPrototype(newPrototype))
        }else{
            throw("EXCEPTION: CIRCULAR INHERITANCE NOT ALLOWED");
        }
    }else{
        this.list.push(newPrototype);
   }






/*
if(newPrototype.list != 0){
    if(newPrototype.list.indexOf(tempCallerObj) > -1){
        console.error("EXCEPTION: CIRCULAR INHERITANCE NOT ALLOWED")
    }else {
        tempCallerObj.list.push(newPrototype);
    }
} */

}


/*** Alla test Program for protoype*/

/*
var obj0 = myObject.create(null);
obj0.func = function (arg) {return "func0: " + arg;};
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function (arg) {return "func2: " + arg;};
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);
*/


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

/** Checks for cdercular inheritance */
obj1 = myObject.create(null);
obj2 = myObject.create(null);
obj3 = myObject.create(null);

obj0 = myObject.create([obj1,obj2,obj3]);
obj4 = myObject.create([obj0]);
obj3.addPrototype(obj4);
