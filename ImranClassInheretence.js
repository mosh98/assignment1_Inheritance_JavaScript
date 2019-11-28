





call = function (nameOfFunction, param) {

    var b = [];

    /**
     * Variables for the arraylist*/
    var arr = this.list
    var arrayLength = arr.length;

    if(this.hasOwnProperty(nameOfFunction)){
        return this[nameOfFunction](param)
    }
    for (var i = 0; i < arrayLength; i++) {
        var currentObject = arr[i];
        if (currentObject.hasOwnProperty(nameOfFunction)) {
            // console.log("function Exist ? :" + currentObject.hasOwnProperty(nameOfFunction))
            b.push(arr[i][nameOfFunction](param));
            // return arr[i][nameOfFunction](parametres);
        } else if (currentObject.list.length != 0) {
            var tempArr = currentObject.list;
            tempArr.forEach(function (item,index,array){
                if (item.hasOwnProperty(nameOfFunction)) {
                    b.push(item[nameOfFunction](param));
                }
            })

        }
    }
    //console.log("The arrayList has these elements " + b);

    return b[0];

}

createClass = function (className, classList){
    var temp  = {};
    var tempObject = {};
    temp.name = className;
    if(classList === null){
        temp.list = []
    }else {
        temp.list = classList
    }

    temp.new = function () {
        tempObject.__proto__ = this;
        tempObject.call = function (nameOfFunction, parametres) {
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
        return tempObject;
    }
    return temp;
}







var class0 = createClass("Class0", null);
console
class0.func = function(arg) { return "func0: " + arg; };
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func = function(arg) { return "func2: " + arg; };
var class3 = createClass("Class3", [class1, class2]);
var class4 = createClass("Class4", [class3]);
class4.func = function(arg) { return "func4: " + arg; };
var obj4 = class4.new();

var result = obj4.call("func", ["hello"]);
console.log(result)