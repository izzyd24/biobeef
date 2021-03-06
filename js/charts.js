function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("js/samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("js/samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// D1: buildCharts FUNCTION
// 1. Create the function.
function buildCharts(sample) {
  //console.log(sample);
// 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("js/samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples = data.samples; 
    //console.log(data);
    // 4. Create a variable that filters the samples for the object with the desired sample number
    // using filter through arrow function
    var sampleObjHolder = samples.filter(samples => samples.id == sample);
    // 5. Create a variable that holds the first sample in the array.
    var results = sampleObjHolder[0];
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuId = results.otu_ids;
    var otuLabel = results.otu_labels;
    var sampleVal = results.sample_values; 

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    // so the otu_ids with the most bacteria are last. 
    // used arrow function AND sliced 0-10 as requested
    var yticks = otuId.map(a=> "OTU" + a).slice(0,10).reverse();

    // need to make xticks?
    var xticks = sampleVal.slice(0,10).reverse();

    // need to do same for labels?
    var labels = otuLabel.slice(0,10).reverse();

    // 8. Create the trace for the bar chart. 
    var barData = [{
      // x must be strings
      x: xticks,
      y: yticks,
      type: 'bar',
      orientation: 'h',
      text: labels
    }];

    // necessary to do this? 
    //var trace = [barData];

    // 9. Create the layout for the bar chart. 
    var barLayout = {
    title: {text: "<b> Top Ten Bacteria Cultures Found </b> <br></br>"},
    //x vals = sample_values
    //y vals = otu_ids
    xaxis: {title: "Sample Values"},
    yaxis: {title: "Otu Ids"}};

    // plot the bar chart
    Plotly.newPlot("bar", barData, barLayout);

  // D2: BUBBLE CHART CREATION
    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otuId,
      y: sampleVal,
      text: otuLabel,
      mode: 'markers',
      marker: {
        size: sampleVal,
        color: otuId,
        // documentation: https://plotly.com/javascript/colorscales/
        colorscale: 'Picnic'
      }
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: {text: "<b> Bacteria Cultures Per Sample </b> <br></br>"},
      xaxis: {title: "OTU ID"},
      // showlegend or use hovermode??
      //Documentation: https://plotly.com/javascript/bubble-charts/#hover-text-on-bubble-charts
      //showlegend: false
      hovermode: 'closest',
      // to resize automatically
      // Documentation: https://plotly.com/python/setting-graph-size/
      // Would like to refactor as a live adjust graph size through a function
      automargin: true
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);   

  // D3: Gauge chart
  // create var to filter metadata array for obj id matches id # in buildCharts
    var metadata =data.metadata;
    var arrayG = metadata.filter(metaObj => metaObj.id == sample);
    var resultG = arrayG[0];
    var wfreqs = resultG.wfreq;

    // create the trace 
    var dataG = {
      title: {text: "<b> Belly Button Washing Frequency </b> <br></br> Scrubs Per Week"},
      value: wfreqs,
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: {range: [0,10]},
        bar: {color: "black"},
        steps: [
          {range: [0,2], color:"lightcoral"},
          {range: [2,4], color:"darkorange"},
          {range: [4,6], color:"yellowgreen"},
          {range: [6,8], color:"skyblue"},
          {range: [8,10], color:"mediumslateblue"}
        ]
      }
    };
    //var traceG = [dataG];

    // create var to hold 1st sample in array
    var gaugeLayout = {
      // or should use as in documentation: https://plotly.com/javascript/gauge-charts/
      //width: 600, height: 500, margin: { t: 0, b: 0 }
      automargin: true
      };

    Plotly.newPlot("gauge", [dataG], gaugeLayout);
  });
};
