//moma1820 Mosleh Mahamud
//imqu5918 Imran Qumtur

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

myObject.call = function (nameOfFunction, param) {
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

