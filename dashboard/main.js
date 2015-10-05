
//==========================
var margin = {top: 10, right: 10, bottom: 10, left: 10};
var width = 800 - margin.left - margin.right;
var height = 200 - margin.top - margin.bottom;
var barLength = 40;
var delayTime = 600;
var durationTime = 1000;

var color = d3.scale.category20();

d3.select('#visualData_1')
.selectAll('svg')
.data([0, 0, 0, 0])
.enter()
.append('svg')
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.attr('viewBox', '0 0 1 1')
.attr('class', 'mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop');

//
// visualData_1_svg_1.x = d3.scale.linear().range([0, 1]).domain(d3.extent(visualData_1_svg_1.data, function (d) {
//   return d.sid;
// }));;
// visualData_1_svg_1.y = d3.scale.linear().range([1, 0]).domain(d3.extent(visualData_1_svg_1.data, function (d) {
//   return d.score;
// }));
//
// visualData_1_svg_1.xAxis = d3.svg.axis().scale(visualData_1_svg_1.x)
// .orient("bottom");
//
// visualData_1_svg_1.yAxis = d3.svg.axis().scale(visualData_1_svg_1.y)
// .orient("left");
//
// visualData_1_svg_1.valueline = d3.svg.line().x(function (d) {
//   return visualData_1_svg_1.x(d.sid);
// }).y(function (d) {
//   return visualData_1_svg_1.y(d.score);
// });
//
// visualData_1_svg_1.select = d3.select('#visualData_1 svg:nth-child(1)');
//
// visualData_1_svg_1.select.append("g")
// .attr("transform", "translate(0,1)")
// .call(visualData_1_svg_1.xAxis);
//
// visualData_1_svg_1.select.append("g")
// .call(visualData_1_svg_1.yAxis);
//
// visualData_1_svg_1.path = visualData_1_svg_1.select.append('path')
// .attr('class', 'line')
// .attr('d', visualData_1_svg_1.valueline(visualData_1_svg_1.data));
//
// visualData_1_svg_1.totalLength = visualData_1_svg_1.path.node().getTotalLength();
//
// visualData_1_svg_1.path.attr("stroke-dasharray", visualData_1_svg_1.totalLength + " " + visualData_1_svg_1.totalLength)
// .attr("stroke-dashoffset", visualData_1_svg_1.totalLength)
// .transition()
// .delay(delayTime)
// .duration(durationTime)
// .ease("linear")
// .attr("stroke-dashoffset", 0);




// ===============================

var visualData_1_svg_2_data = [{
  value: 800,
  text: 'Highest',
  color: '#9E9E9E'
}, {
  value: 689,
  text: 'Average',
  color: '#BDBDBD'
}, {
  value: 500,
  text: 'Yours',
  color: '#E0E0E0'
}, {
  value: 200,
  text: 'Lowest',
  color: '#EEEEEE'
}]

var visualData_1_svg_2 = d3.select('#visualData_1 svg:nth-child(2)');

visualData_1_svg_2.y = d3.scale.linear()
.range([height, 0])
.domain([0, d3.max(visualData_1_svg_2_data.map(function (d) {
  return d.value;
}))])

visualData_1_svg_2.bar = visualData_1_svg_2.selectAll('rect')
.data(visualData_1_svg_2_data)
.enter();

visualData_1_svg_2.bar.append('rect')
.attr('fill', function (d) {
  return d.color;
})
.attr('x', ((width - barLength)/2)/width)
.attr('y', (height - margin.bottom)/height)
.attr('width', barLength/width)
.attr("height", function (d) {
  return (height - margin.bottom - margin.top - visualData_1_svg_2.y(d.value))/height;
})
.transition()
.delay(delayTime)
.duration(durationTime)
.attr("y", function (d) {
  return (visualData_1_svg_2.y(d.value) + margin.bottom)/height;
})
.each('end', function (d) {
  d3.select(this.parentNode)
  .append("text")
  .attr('x', 0.5)
  .attr('y', function () {
    return (visualData_1_svg_2.y(d.value) + margin.bottom)/height;
  })
  .attr('dy', '0.01')
  .attr('dx', '0.15')
  .attr('transform', 'translate(0,' + (10/height) + ')')
  .text(function() {
    return d.text;
  })
  .attr('font-size', '0.06')
  ;
});

visualData_1_svg_2.append('rect')
.attr('x', ((width - barLength)/2/width))
.attr('y', function (d) {
  return (height - margin.bottom)/height;
})
.attr('width', barLength/width)
.attr("height", (margin.bottom + margin.top)/height)
.attr('fill', '#fff')

// ===============================

var visualData_1_svg_3 = {};

visualData_1_svg_3.data = [{
  value: 220,
  text: 'Full-Time',
  color: '#98abc5'
}, {
  value: 1122,
  text: 'Part-Time',
  color: '#8a89a6'
}];

visualData_1_svg_3.select = d3.select('#visualData_1 svg:nth-child(3)');
visualData_1_svg_3.radius = Math.min(width, height) / 2;

visualData_1_svg_3.sum = 0;
for (var i in visualData_1_svg_3.data) {
  visualData_1_svg_3.sum += visualData_1_svg_3.data[i].value;
}

visualData_1_svg_3.τ = 2 * Math.PI;

visualData_1_svg_3.arc = d3.svg.arc()
.outerRadius((visualData_1_svg_3.radius - 10)/Math.min(width, height))
.innerRadius((visualData_1_svg_3.radius - 10 - barLength)/Math.min(width, height))
.startAngle(0)
.endAngle(function (d) {
  return d/visualData_1_svg_3.sum * visualData_1_svg_3.τ;
});

path = visualData_1_svg_3.select.selectAll("path")
.data(visualData_1_svg_3.data)
.enter()
.append("path")
.style("fill", function (d, i) {
  return d.color;
})
.attr('transform', 'translate(0.5, 0.5)')
.transition()
.delay(delayTime)
.duration(durationTime)
.attrTween("d", arcTween)
.each('end', function (d, i) {
  d3.select(this.parentNode)
  .append("text")
  .attr("transform", function() {
    return "translate(" + (visualData_1_svg_3.arc.centroid(Math.pow(-1, i)*d.value).map(function (da) {
      return da + 0.5;
    })) + ")";
  })
  .style("text-anchor", "middle")
  .text(function() {
    return d.text;
  })
  .style('font-size', '0.06');
});

function arcTween(d, i) {
  var interp = d3.interpolate(0, Math.pow(-1, i)*d.value);
  return function(t) {
    return visualData_1_svg_3.arc(interp(t));
  };
}

// ===============================

var visualData_1_svg_4 = {};

visualData_1_svg_4.data = [{
  value: 0.28,
  text: 'National',
  color: '#EEEEEE'
}, {
  value: 0.72,
  text: 'International',
  color: '#E0E0E0'
}];

visualData_1_svg_4.select = d3.select('#visualData_1 svg:nth-child(4)');


var y = d3.scale.linear()
.range([height, 0])
.domain([0, d3.max(visualData_1_svg_4.data.map(function (d) {
  return d.value;
}))])

visualData_1_svg_4.select.append('rect')
.attr('x', 1)
.attr('y', (height-barLength)/2/height)
.attr('width', visualData_1_svg_4.data[1].value)
.attr("height", barLength/height)
.attr('fill', visualData_1_svg_4.data[1].color)
.transition()
.delay(delayTime)
.duration(durationTime)
.attr('x', visualData_1_svg_4.data[0].value)

visualData_1_svg_4.select.append('rect')
.attr('x', 0)
.attr('y', (height-barLength)/2/height)
.attr('width', 0)
.attr("height", barLength/height)
.attr('fill', visualData_1_svg_4.data[0].color)
.transition()
.delay(delayTime)
.duration(durationTime)
.attr('width', visualData_1_svg_4.data[0].value)
.each('end', function (d, i) {
  visualData_1_svg_4.select.selectAll('text')
  .data(visualData_1_svg_4.data)
  .enter()
  .append('text')

  .attr('x', function (d, i) {
    if (d.value < .5) {
      return d.value/2;
    } else {
      return (1-d.value/2);
    }
  })

  .attr('x', function (d, i) {
    if (d.value < .5) {
      return d.value/2;
    } else {
      return (1-d.value/2)
    }
  })
  .attr('y', 0.5)
  .attr('dy', 0.02)
  .text(function (d) {
    return d.text;
  })
  .attr('text-anchor', 'middle')
  .attr('font-size', '0.06');
})

visualData_1_svg_4.select.append('rect')
.attr('x', 1)
.attr('y', (height-barLength)/2/height)
.attr('width', 200/width)
.attr("height", barLength/height)
.attr('fill', '#fff');

//////////////////////////////////////////

width = 800 - margin.left - margin.right;
height = 200 - margin.top - margin.bottom;

d3.select('#visualData_2')
.selectAll('svg')
.data([0])
.enter()
.append('svg')
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.attr('viewBox', '0 0 ' + width + ' ' + height)
.attr('class', 'mdl-cell mdl-cell--12-col mdl-cell--12-col-desktop');

visualData_2_svg_1 = {};

visualData_2_svg_1.formatNumber = d3.format(",.0f");
visualData_2_svg_1.format = function(d) { return visualData_2_svg_1.formatNumber(d) + " TWh"; };

visualData_2_svg_1.data = {
  "nodes":
  [{"name":"Total Applicants"},
  {"name":"New Applicants"},
  {"name":"Reapplicants"},
  {"name":"New Applicants Admitted"},
  {"name":"Reapplicants Admitted"},
  {"name":"New Applicants Not Admitted"},
  {"name":"Reapplicants Not Admitted"},
  {"name":"Admitted"},
  {"name":"Not Admitted"}],
  "links":
  [{"source":7,"target":0,"value":22.6},
  {"source":8,"target":0,"value":36},
  {"source":0,"target":1,"value":48.7},
  {"source":0,"target":2,"value":9.9},
  {"source":1,"target":3,"value":30.5},
  {"source":1,"target":5,"value":18.2},
  {"source":2,"target":4,"value":4.4},
  {"source":2,"target":6,"value":5.5}]
};

visualData_2_svg_1.select = d3.select('#visualData_2 svg:nth-child(1)')
.attr('viewBox', '0 0 ' + width + ' ' + height);

visualData_2_svg_1.sankey = d3.sankey()
.nodeWidth(15)
.nodePadding(10)
.size([width, height]);

visualData_2_svg_1.path = visualData_2_svg_1.sankey.link();

visualData_2_svg_1.sankey
.nodes(visualData_2_svg_1.data.nodes)
.links(visualData_2_svg_1.data.links)
.layout(32);

visualData_2_svg_1.link = visualData_2_svg_1.select.append("g").selectAll(".link")
.data(visualData_2_svg_1.data.links)
.enter().append("path")
.attr("class", "link")
.attr("d", visualData_2_svg_1.path)
.style("stroke-width", function(d) {console.log(d.dy);return Math.max(1, d.dy); })
.sort(function(a, b) { return b.dy - a.dy; })

// .each('end', function (d, i) {});

visualData_2_svg_1.link.append("title")
.text(function(d) { return d.source.name + " → " + d.target.name + "\n" + visualData_2_svg_1.format(d.value); });

visualData_2_svg_1.node = visualData_2_svg_1.select.append("g").selectAll(".node")
.data(visualData_2_svg_1.data.nodes)
.enter().append("g")
.attr("class", "node")
.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
.call(d3.behavior.drag()
.origin(function(d) { return d; })
.on("dragstart", function() { this.parentNode.appendChild(this); })
.on("drag", dragmove));

visualData_2_svg_1.node.append("rect")
.attr("height", function(d) { return d.dy; })
.attr("width", visualData_2_svg_1.sankey.nodeWidth())
.style("fill", function(d) { return d.color = color(d.name.replace(/ .*/, "")); })
.style("stroke", function(d) { return d3.rgb(d.color).darker(2); })
.append("title")
.text(function(d) { return d.name + "\n" + visualData_2_svg_1.format(d.value); });

visualData_2_svg_1.node.append("text")
.attr("x", -6)
.attr("y", function(d) { return d.dy / 2; })
.attr("dy", ".35em")
.attr("text-anchor", "end")
.attr("transform", null)
.text(function(d) { return d.name; })
.filter(function(d) { return d.x < width / 2; })
.attr("x", 6 + visualData_2_svg_1.sankey.nodeWidth())
.attr("text-anchor", "start");

function dragmove(d) {
  d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))) + ")");
  visualData_2_svg_1.sankey.relayout();
  visualData_2_svg_1.link.attr("d", visualData_2_svg_1.path);
};
