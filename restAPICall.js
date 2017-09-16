//Get the last value of sensor (Parameter: idsensor)
function getLastValueOfSensor(idsensor) {

$.getJSON('http://192.168.43.189:3000/sensorsdata='+idsensor, function(data) {

    var lastIndex = data.length - 1; //Get number of last value
    lastValue = data[lastIndex];
    console.log(lastValue);
    console.log(lastValue.DATA);
  });
};
