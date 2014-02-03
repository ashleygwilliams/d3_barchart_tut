//vanilla JS
//var div = document.createElement("div");
//div.innerHTML = "Hello, world!";
//document.body.appendChild(div);

//d3
//var section = d3.select("body");
//var div = section.append("div");
//div.html("Hello, world!");

//make a chart
var data = [4,8,15,16,23,42];

//d3.select(".chart");
//  .selectAll("div")
//    .data(data)
//  .enter().append("div")
//    .style("width", function(d) { return d * 10 + "px"; })
//    .text(function(d) { return d; });

//select chart container using the class selector
var chart = d3.select(".chart"); 

//initiate data join by making a selection to which
//we will bind the data
var bar = chart.selectAll("div");

//bind the data to the selection
var barUpdate = bar.data(data);

//since we know there are no "div"
//update = empty, and exit is empty
//so we only deal with enter
var barEnter = barUpdate.enter().append("div");

//set width of elements based on data
//barEnter.style("width", function(d) {
//  return d * 10 + 'px';
//});
//WHATS BAD ABOUT THIS??

//set text content of each bar to make a label
barEnter.text(function(d){
  return d;
});

//we need to make a scale so that the chart
//will fit where we want it to
var linearScale = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, 420]); 

barEnter.style("width", function(d){
  return linearScale(d) + 'px';
});