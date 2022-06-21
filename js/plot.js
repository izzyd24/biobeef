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
d3.json("js/samples.json").then(function(data){
    console.log("hello");
});

