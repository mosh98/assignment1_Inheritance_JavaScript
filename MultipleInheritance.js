
var myObject = {}

myObject.call = function (obj, parametres) {
    var funcName = obj;
    var parametreName = parametres;
    var arrayLength = a.length;

    if(this.prototype.hasOwnProperty(funcName)){
        var temp = this.prototype.funcName;
        return temp(funcName);
    }

    for (var i = 0; i < arrayLength; i++) {
        console.log();
        //Do something
        if (a[i].prototype.hasOwnProperty(funcName)) {
            var temp = a[i];
            return temp(parametres);
        }
    }
},
    myObject.create = function (a) {


        if (a === null)
            console.log("man wtf")
        else if (Array.isArray(a)) {
            console.log("terry crews")
            /*** this where inheritance happnes*/
            /*  var arrayLength = a.length;
              for (var i = 0; i < arrayLength; i++) {
                  //Do something
                  b.push(a[i]);
                  Object.assign(this.prototype,a[i]);
              }*/


        }
    }




obj0 = myObject.create(null);
//obj0.func = function(arg) { return "func0: " + arg; };
obj1 = myObject.create([obj0]);
obj2 = myObject.create([]);
obj3 = myObject.create([obj2, obj1]);
//result = obj3.call("func", ["hello"]);
//console.log("should print ’func0: hello’ ->", result);