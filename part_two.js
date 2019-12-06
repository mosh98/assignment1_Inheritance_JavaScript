//moma1820 Mosleh Mahamud
//imqu5918 Imran Qumtur

createClass = function (className, classList){
    var tempClass  = {};
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
    tempClass.searchFunc = function(nameOfFunction, param){
        var check
        var result;
        if(this.hasOwnProperty(nameOfFunction)){
            result = this[nameOfFunction](param)
            return result;
        }else{
            if(this.list != 0) {
               this.list.forEach(function(item){
                         check = item.searchFunc(nameOfFunction, param);
                         if(typeof result == "undefined"){
                             result = check;
                         }
                })
            }
        }
        return result;
    }
    tempClass.new = function () {
        var tempObject = {};
        tempObject.__proto__ = this;
        tempObject.call = function (nameOfFunction, param) {
            var result;
            if(tempObject.__proto__.hasOwnProperty(nameOfFunction)){
                result = this[nameOfFunction](param);
            } else{
                result = tempObject.__proto__.searchFunc(nameOfFunction, param);
            }
            return result;
        }
        return tempObject;
    }
    return tempClass;
}



