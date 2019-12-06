

createClass = function (className, classList){
    var tempClass  = {};
    var tempObject = {};
    tempClass.name = className;
    if(classList == null){
        tempClass.list = []
    }else {
        tempClass.list = classList
    }
    tempClass.checkSuperClass = function(targetClass){
        if(this.list != 0){
            if(this.list.indexOf(targetClass) == -1){
                this.list.forEach(obj => obj.checkSuperClass(targetClass))
            } else {
                throw "EXCEPTION: CIRCULAR INHERITANCE NOT ALLOWED";
            }
        }
    }
    tempClass.addSuperClass = function(newSuperClass) {
        newSuperClass.checkSuperClass(this);
        this.list.push(newSuperClass);




    }

    tempClass.new = function () {
        tempObject.__proto__ = this;
        tempObject.searchFunc = function(nameOfFunction){
            if(this.__proto__.hasOwnProperty(nameOfFunction)){
                return this[nameOfFunction](parametres)
            }
            

        }
        tempObject.call = function (nameOfFunction, parametres) {
            var b = [];
            var arr = this.list
            var arrayLength = arr.length;
            if(this.__proto__.hasOwnProperty(nameOfFunction)){
                return this[nameOfFunction](parametres)
            }
            for (var i = 0; i < arrayLength; i++) {
                var currentObject = arr[i];
                if (currentObject.hasOwnProperty(nameOfFunction)) {
                    b.push(arr[i][nameOfFunction](parametres));
                } else if (currentObject.list.length != 0) {
                    var tempArr = currentObject.list;
                    tempArr.forEach(function (item,index,array){
                        if (item.hasOwnProperty(nameOfFunction)) {
                            b.push(item[nameOfFunction](parametres));
                        }
                    })
                }
            }
            return b[0];
        }


        return tempObject;
    }
    return tempClass;
}

/*
var class0 = createClass("Class 0", null);
var class1 = createClass("Class 1", [class0]);
var class2 = createClass("Class 2", [class1]);
var class3 = createClass("Class 3", [class2]);
class0.func = function(arg) { return "func0: " + arg; };
var obj0 = class3.new();
result = obj0.call("func", ["hello"]);
console.log(result);
*/
