


function myObject(){

    myObject().prototype = {
        create: function ([]) {
            console.log("yo mama")


            function call(funcName, parametres) {

            }
        }
    }
    

}



var obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function(arg) { return "func2: " + arg; };
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call("func", ["hello"]) ;
console.log("should print ’func0: hello’ ->", result);