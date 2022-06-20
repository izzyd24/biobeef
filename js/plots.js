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
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };
 var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
// where plotArea = html div that contains the chart
// trace = array that contains the data object
// layout = object that contains the layout details
 Plotly.newPlot("plotArea", [trace], layout);