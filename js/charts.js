function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
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
  d3.json("samples.json").then((data) => {
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
// 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    const samplesHolder = data.samplesHolder; 
    // 4. Create a variable that filters the samples for the object with the desired sample number
    // using filter through arrow function
    const sampleObjHolder = samplesHolder.filter(obj => obj.id == sample);
    // 5. Create a variable that holds the first sample in the array.
    const results = sampleObjHolder[0];
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    const otuId = results.otu_ids;
    const otuLabel = results.otu_labels;
    const sampleVal = results.sample_values; 

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    // so the otu_ids with the most bacteria are last. 
    // used arrow function AND sliced 0-10 as requested
    var yticks = otuId.slice(0,10).reverse().map(function (a){
    return {a}});
    // need to make xticks?
    var xticks = sampleVal.slice(0,10).reverse();

    // need to do same for labels?
    var labels = otuLabel.slice(0,10).reverse();

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: xticks,
      y: yticks,
      type: 'bar',
      orientation: 'h',
      text: labels
    }];

    // necessary to do this? 
    var trace = {barData};

    // 9. Create the layout for the bar chart. 
    var barLayout = {
    title: "Top Ten Bacteria Cultures Found",
    //x vals = sample_values
    //y vals = otu_ids
    xaxis: {title: "Sample Values"},
    yaxis: {title: "Otu Ids"}};

    // plot the bar chart
    Plotly.newPlot("bar", [trace], barLayout);

  // D2: BUBBLE CHART CREATION
    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otuId,
      y: sampleVal,
      text: otuLabel,
      mode: 'markers',
      marker: {
        size: sampleVals,
        color: otuIDs,
        // documentation: https://plotly.com/javascript/colorscales/
        colorscale: 'Picnic'
      }
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
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
    Plotly.newPlot("bubble", [bubbleData], bubbleLayout);   

  // // D3: Gauge chart
  //   var gaugeData = {
  //     title: {text: "Belly Button Washing Frequency<br>Scrubs per Week"},
  //       type: "indicator",
  //       mode: "gauge+number",
  //       gauge: {
  //         axis: {range: [0,10]},
  //         steps: [
  //           {range: [0,2], color:"#ea2c2c"},
  //           {range: [2,4], color:"#ea822c"},
  //           {range: [4,6], color:"#ee9c00"},
  //           {range: [6,8], color:"#eecc00"},
  //           {range: [8,10], color:"#d4ee00"}
  //         ]
  //       }
  //     };
  //     var gaugeLayout = {
  //       width: 600, height: 450, margin: {t: 0, b: 0}
  //     };
  //     Plotly.newPlot("gauge", [gaugeData], gaugeLayout);
  //   });
  // };
