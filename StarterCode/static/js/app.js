// from data.js
var tableData = data;

// select html table body to insert data
var tbody = d3.select('tbody');

// populate the tbody with the data.js data going thru the data.js va forEach
tableData.forEach(function(sightings) {
    //at record level add new table row
    var row = tbody.append('tr');
    //within each dictionary forEach again to add each value to the row's cells
    Object.entries(sightings).forEach(function([key, value]) {
        var cell = row.append('td');
        cell.text(value);
    //close dictionary forEach loop
    });
//close entry row forEach loop
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form-control");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
      // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
};

