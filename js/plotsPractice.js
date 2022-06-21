//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
// create a new line chart of my own, with a more consistent call via variables
// pass the variable instead of the exact array with key-values (refactor the above plot)
// var trace = {
//     x: [1,2,3],
//     y: [10,20,30],
//     type: "line"
// };
// var layout = {
//     title: "First Line Chart via Js + Plotly!"
// };
// Plotly.newPlot("plotArea", [trace], layout);

// bar charts
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };
//  var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };
// where plotArea = html div that contains the chart
// trace = array that contains the data object
// layout = object that contains the layout details
 // Plotly.newPlot("plotArea", [trace], layout);

// pie chart creation
// pie charts cannot use x and y, they need different keys---labels and values
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Pie' Chart",
//    };
//    Plotly.newPlot("plotArea", data, layout);

// scatter chart creation
// mode = markers, lines, markers+lines
// var trace = {
//     x: [1, 2, 3, 4],
//     y: [10, 15, 13, 17],
//     mode: 'lines+markers',
//     type: 'scatter'
// };
// var data = [trace];
// var layout = {
//     title: "Scatter Chart!",
// };
// Plotly.newPlot("plotArea", data, layout);

// example 12.2.1 map function
// var numbers = [1,2,3,4,5];
// // set a new var = previous var, then use map function
// // use anynonymous function inside, with no name, param of num
// var doubled = numbers.map(function(num){
//     // for every element in array, it will double the values
//     // similar to for loop itreration 
//     // num is arbitrary, can be called anything!
//     return num * 2;
// });
// console.log(doubled);

// example to extract 'population' of each city 
// var cities is the given array of objects with properties: rank, city, state, increase, population
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];
// // map function to get the city populations from the previous array of objects
// var cityPop = cities.map(function(populationFinder){
//     return populationFinder.population;
// });
// console.log(cityPop);

// example 12.1.1 filter function
// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(function(num){
//     // returns a number larger than the original element in the array
//     // map transforms every element in original array, filter returns values that meets criteria
//     return num > 1;
// });

// console.log(larger);

// example asking to filter through words for species starting with letter s 
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander']; 

// var startWithS = words.filter((wordsFinder) => wordsFinder.startsWith("s"));

// console.log(startWithS);

// slice practice 12.2.1
// want to return the first 3 elements in the array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1 = words.slice(0,3);
console.log(slice1);
