
var myObject = {}

myObject.call = function (obj, parametres) {
    var funcName = obj;
    var parametreName = parametres;
    var arrayLength = b.length;

    if(this.prototype.hasOwnProperty(funcName)){
        var temp = this.prototype.funcName;
        return temp(funcName);
    }

    for (var i = 0; i < arrayLength; i++) {
        console.log();
        //Do something
        if (b[i].name === funcName) {
            var temp = b[i];
            return temp(parametres);
        }
    }
},
    myObject.create = function (a) {

    var b = a

        if (a === null){
            console.log("man wtf")
            return Object
        }


    else if (Array.isArray(a)) {
            console.log("terry crews")
            /*** this where inheritance happnes*/
              var arrayLength = a.length;
              for (var i = 0; i < arrayLength; i++) {
                //Do something
                b.push(a[i]);
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