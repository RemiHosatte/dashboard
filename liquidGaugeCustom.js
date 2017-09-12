
function percentageToHslColor(percentage, hue0, hue1) {

    var hue = (percentage * (hue1 - hue0)) + hue0;
    return 'hsl(' + hue + ', 80%, 40%)';
}
function percentageToHslColorText(percentage, hue0, hue1) {

    var hue = (percentage * (hue1 - hue0)) + hue0;
    return 'hsl(' + hue + ', 50%, 30%)';
}
var capteurHumiditeSol = [21,82,44,11,74,66]

for (var i = 0; i < 6; i++) {

  color = percentageToHslColor(capteurHumiditeSol[i]/100, 0, 120);

  colortext = percentageToHslColorText(capteurHumiditeSol[i]/100, 0, 120);
  d3.select("#fillgauge"+i).call(d3.liquidfillgauge, capteurHumiditeSol[i],
  {
    circleColor: color,
    textColor: colortext,
   waveTextColor: colortext,
    waveColor: color,
    waveAnimateTime: 1000,
    circleThickness: 0.1,
  });
}
