//Get the last value of sensor (Parameter: idsensor)
$.ajaxSetup({
   async: false
 });
 //Init variable
 var dataValue = 0;
 var min = 0;
 var max = 0;
 var avg = 0;
function getLastValueOfSensor(idsensor) {

$.getJSON('http://192.168.43.189:3000/sensorsdata='+idsensor, function(data) {

    //Get the last value
    var lastIndex = data.length - 1; //Get number of last value
    lastValue = data[lastIndex];
    dataValue = lastValue.DATA;

    //Calculate average of the value
    var mapData = data.map(function(a){return a.DATA;});
    mapData = mapData.join(' ').split(' ').map(parseFloat);
    avg = mapData.reduce(function(total, num){
       return total + num })/data.length;

    //Calculate min and max of the array
    max = Math.max.apply(Math,data.map(function(o){return o.DATA;}));
    min = Math.min.apply(Math,data.map(function(o){return o.DATA;}));
});
return [dataValue, min, max, avg];
};
