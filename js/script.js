// create an event listener
// updatePage function called when there is a change to html body
// when event occurs on page, updatPage is triggered
d3.selectAll("body").on("change", updatePage);

function updatePage() {
  // select the dropdown menu, id of selectOption
  var dropdownMenu = d3.selectAll("#selectOption").node();
  // id of dropdown menu set to a var to call later
  var dropdownMenuID = dropdownMenu.id;
  // selectOption is the id value of dropdown menu
  // selectedOption is the option chosen by user
  var selectedOption = dropdownMenu.value;

  // each time updatePage triggered, id value of dropdown menu
  // value of chosen menu option both printed
  console.log(dropdownMenuID);
  console.log(selectedOption);
};