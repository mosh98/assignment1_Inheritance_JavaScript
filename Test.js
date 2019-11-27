
//test Class to do random stuff

/**
 *function of an Object is invoked
 *checks if the function exist within the object itself.
 *if it does not exist within the prototype
 *it is going to search for it in other prototypes
 *
 *
 *
 *
 *
 *you can check if a fuction exist in an object by using hasPropertyOf
 *
 **/

var myObject = {

}

myObject.create = function (protoList) {
    var temp = {}
    temp.__proto__ = this
    temp.pList = protoList
    return temp
}

var obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
var obj1 = myObject.create([obj0]);
console.log(obj1)
