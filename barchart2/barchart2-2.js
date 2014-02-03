//create data
//set dimensions for chart
var width = 420,
    barHeight = 20;

//create linear scale 
var linearScale = d3.scale.linear()
  //gotta wait cuz we don't know the data!
  //.domain([0, d3.max(data)])
  .range([0, width]);

//select chart and set it to the dimensions
var chart = d3.select(".chart")
  .attr("width", width)
  //we'll do this later since we don't have any
  //data yet!
  //.attr("height", barHeight * data.length);

//all of this needs to be wrapped in the .csv func
d3.csv("data.csv", type, function(error, data){
linearScale.domain([0, d3.max(data, function(d) { return d.value; })]);

  chart.attr("height", barHeight * data.length);

  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

  bar.append("rect")
      .attr("width", function(d) { return linearScale(d.value); })
      .attr("height", barHeight - 1);

  bar.append("text")
      .attr("x", function(d) { return linearScale(d.value) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d.value; });
});

function type(d) {
  d.value = +d.value //coerce to number
  return d;
}


