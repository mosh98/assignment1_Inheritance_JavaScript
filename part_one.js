var myObject = {}

var record = [];

myObject.create = function (protoList) {

    var temp = {}
    temp.__proto__ = this;

    if (protoList === null) {
        temp.list = []
    } else {
        temp.list = protoList
    }
    return temp
}


/** Implememnt call method over her*/

myObject.call = function (nameOfFunction, param) {
    /**
     * Variables for the arraylist*/

    var result;
    if(this.hasOwnProperty(nameOfFunction)){
        result = this[nameOfFunction](param);
        record.push(result);
    } else{
        this.list.forEach(function (item) {
            result = item.call(nameOfFunction, param)
        })
    }

return record[0];
}




myObject.checkProto = function (targetProto) {
    if (this.list != 0) {
        if (this.list.indexOf(targetProto) == -1) {
            this.list.forEach(obj => obj.checkProto(targetProto))
        } else {
            throw "EXCEPTION: CIRCULAR INHERITANCE NOT ALLOWED";
        }
    }
}

myObject.addPrototype = function (newPrototype) {

    newPrototype.checkProto(this);
    this.list.add(newPrototype);

}


obj0 = myObject.create(null);
obj1 = myObject.create([obj0])
obj2 = myObject.create([obj1])
obj3 = myObject.create([obj2])
obj0.func = function (arg) {
    return "func0: " + arg;
};
result = obj3.call("func", ["hello"]);
console.log(result);

/*
obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
obj1 = myObject.create([obj0]);
obj2 = myObject.create([]);
obj3 = myObject.create([obj2, obj1]);
result = obj3.call("func", ["hello"]);
console.log("should print ’func0: hello’ ->", result);*/

/*
var obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function(arg) { return "func2: " + arg; };
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call("func", ["hello"]) ;
console.log("should print ’func0: hello’ ->", result);*/
