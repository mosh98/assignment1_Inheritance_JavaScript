

createClass = function (className, classList){
    var tempClass  = {};
    var tempObject = {};
    tempClass.name = className;
    if(classList === null){
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
        /*
        if (newSuperClass.list != 0) {
            if (newSuperClass.list.indexOf(this) == -1) {
                newSuperClass.list.forEach(obj => obj.addSuperClass(newSuperClass))
            } else {
                throw  "EXCEPTION: CIRCULAR INHERITANCE NOT ALLOWED";
            }
        } else {
            this.list.push(newSuperClass);
        }
  */


/*
        if (paramObj.list != 0) {
            if (paramObj.list) {
                throw("EXCEPTION: CIRCULAR INHERITANCE NOT ALLOWED")
            } else {
                tempCallerObj.list.push(paramObj);
            }

        }
    }  */

    tempClass.new = function () {
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
    return tempClass;
}


var class0 = createClass("Class 0", null);
var class1 = createClass("Class 1", [class0]);
var class2 = createClass("Class 2", [class1]);
var class3 = createClass("Class 3", [class2]);
class1.addSuperClass(class3);





