Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
// create a new line chart of my own, with a more consistent call via variables
// pass the variable instead of the exact array with key-values (refactor the above plot)
var trace = {
    x: [1,2,3],
    y: [10,20,30],
    type: "line"
};
var layout = {
    title: "First Line Chart via Js + Plotly!"
};
Plotly.newPlot("plotArea", [trace], [layout]);