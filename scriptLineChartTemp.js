
var svg = d3.select("#chartTemp"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%d-%b-%y-%H:%M");

var x = d3.scaleTime()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

d3.tsv("data.tsv", function(d) {
  d.date = parseTime(d.date);
  d.close = +d.close;
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain(d3.extent(data, function(d) { return d.close; }));

  /*g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr("class", "axisRed")
      .call(d3.axisBottom(x))
    .select(".domain")
      .remove();*/

  g.append("g")
      .attr("class", "axisRed")
      .call(d3.axisLeft(y)
          .ticks(2));

  g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#e95124")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 2)
      .attr("d", line);
});
