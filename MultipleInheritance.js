
var myObject = {
    create: function (a) {
        if(a === null)
            console.log("man wtf")

        if (Array.isArray(a)) {
            console.log("terry crews")
            /*** this where inheritance happnes*/
            a.forEach(item, index, a)
           item.prototype
        }
    },

    call: function (obj,parametres) {
        for(var m in a) {
            if(typeof a[m] == obj) {
                return a[m].obj(parametres);
            }
        }
    }
}


obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
obj1 = myObject.create([obj0]);
obj2 = myObject.create([]);
obj3 = myObject.create([obj2, obj1]);
//result = obj3.call("func", ["hello"]);
//console.log("should print ’func0: hello’ ->", result);