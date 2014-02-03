var data = [4000,8000,15000,16000,23000,42000];

var chart = d3.select(".chart");
var bar = chart.selectAll("div");

var linearScale = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, 420]);

var barUpdate = bar.data(data);

var barEnter = barUpdate.enter().append("div");

barEnter.text(function(d){
  return d;
})

barEnter.style("width", function(d){
  return linearScale(d) + "px";
});