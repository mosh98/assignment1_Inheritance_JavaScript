/** Min version av ClassBased mult inhertiance (kmr nog ta bort detta klassen innan vi skikar in :D )*/


var createClass = function (name, list) {
    var temp = {}
    temp.__proto__ = this
    if(name.length != 0 ){
        temp.name = name;
    }else{
        throw "you cant do this"
    }

    if(list === null){
        temp.list = []
    }else {
        temp.list = list
    }

    temp.new = function () {

        var x = this.__proto__;
        return x;
    }

    Object.call = function (nameOfFunction, parametres) {

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


    return temp;
};





var class0 = createClass("Class0", null);
class0.func = function(arg) { return "func0: " + arg; };
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func = function(arg) { return "func2: " + arg; };
var class3 = createClass("Class3", [class1, class2]);
var obj3 = class3.new();
var result = obj3.call("func", ["hello"]);