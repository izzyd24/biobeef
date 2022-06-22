// verify that the data.js file is loading from our HTMl correctly
// console.log(cityGrowths);

// Tasks 12.2.2: 
// 1. Sort cities in descending order of population growth
// take an argument a and b for increase from element
// a = one city in the dataset, b = next city listed in dataset
// var citySortDesc = cityGrowths.sort((a,b)=> a.Increase_from_2016 - b.Increase_from_2016).reverse();
// console.log(citySortDesc);

// // 2. Select only top 5 cities by growth 
// // use slice to perform the task
// var topFiveCities = citySortDesc.slice(0,5);
// console.log(topFiveCities);

// // 3. Create seperate arrays for city names + population growths 
// // create an array of city names = topFiveCityNames
// // create an array of pop growths = topFiveCityGrowths
// // take both arrays, use map and extract properties as x,y for plotly later
// var topFiveCityNames = cityGrowths.map(city=>city.City);
// // parse int included to convert strings into int type
// var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// // 4. Use plotly, create a bar chart with the arrays
// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
// };
// // why include the var trace = var data? What is the benefit of calling on data instead?
// var data = [trace];
// var layout = {
//     title: "12.2.2 Bar Chart: Most Rapidly Growing Cities",
//     xaxis: {title: "City" },
//     yaxis: {title: "Population Growth, 2016-2017"}
// };
// Plotly.newPlot("bar-plot", data, layout);

// Same dataset, practice creating a bar chart for seven largest cities by population
// d3.json("js/samples.json").then(function(data){
//     console.log("hello");
// });

// // extract metadata of 1st person in dataset, at the 0 index position 
// // entries method to return key-value paid in array
// // forEach method to access each element in these pairs 
// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });

// renders the initial viz
// simple line chart made
// function init() {
//     data = [{
//       x: [1, 2, 3, 4, 5],
//       y: [1, 2, 4, 8, 16] 
//     }];
//     Plotly.newPlot("plot", data);
//   };
  
// // line charts change as the different datasets are selected4
// // changes takes place to html dom element, with id dropdownMenu
// d3.selectAll("#dropdownMenu").on("change", updatePlotly);
// // updatePlotly called when user creates an event
// // dropdown menu is the event here
// function updatePlotly() {
//     // assigned to DOM element with id dropdownMenu
//     var dropdownMenu = d3.select("#dropdownMenu");
//     // assigned to value of dropdown menu option by user selection
//     // either dataset 1 or 2
//     var dataset = dropdownMenu.property("value");

//     // xData, yData depends on which dropdown menu selected
//     var xData = [1, 2, 3, 4, 5];
//     var yData = [];

//     // if value = dataset 1 = yData
//     // if value = dataset 2 = xData
//     if (dataset === 'dataset1') {
//       yData = [1, 2, 4, 8, 16];
//     };
  
//     if (dataset === 'dataset2') {
//       yData = [1, 10, 100, 1000, 10000];
//     };

//     // assmeble x and y data arrays inside trace object
//     var trace = {
//       x: [xData],
//       y: [yData],
//     };
//     // Plotly.restyle() defaults accepting object (trace)
//     // ... for its data argument, instead of array
//     // re-render the page, does not create new chart from scratch
//     // instead modifies previous displayed chart with updated info 
//     Plotly.restyle("plot", trace);
//   };

// // called when page is initially rendered, 
// // before any event takes place
// init();

function init() {
    // select dropdown menu, with its id
    // assigned to a variable
    var selector = d3.select("#selDataset");

    // d3.json to read the data from samples.json
    // arbtrit. argument x
    d3.json("samples.json").then((x) => {
      console.log(x);
      // names array contains id #s of all participants
      // samples names is assigned to the names array
      // 153 total names array
      var sampleNames = x.names;
      // for each element in array names, dropdown menu appended
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          // text of each dropdown menu option is the id
          .text(sample)
          .property("value", sample);
          // EX:
          // ID 940 is 1st element in sampleNames array
          // forEach itterates over 1st element of array
          // menu option appended to dropdown menu
          // given a text, property assigned to 940
      });
  })}
  
init();

// // takes argument z, logs it to browser console
// // refers to value of selected menu option
// function optionChanged(z) {
//     console.log(z);
// }

// print info to the demographic info panel
// when user selects an ID #, volunteer demographic details 
//... need to be filtered from samples.json, placed in the panel

// z is the volunteer id #, to be passed in both functions
function optionChanged(z) {
    buildMetadata(z);
    buildCharts(z);
}

// refactor to show all demographic data
// need: id, ethnicity, gender, age, location,
// bbtype, wfreq
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");
        
        PANEL.html("");
        PANEL.append("h6").text(result.location);
    });
}

