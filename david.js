let data = [
    { Bil: "Mercedes", Brændstof: "El", Pris: "702.250,-", CO2: "0 g/km", Forbrug: "7,18km/kWh", Acceleration: "0-100km/t - 7,3 sek.", Tophastighed: "210 km/t", Rækkevidde: "630 km.", Kapacitet: "87,7 kWh"},
    { Bil: "Honda", Brændstof: "Diesel", Pris: "557.480,-", CO2: "118 g/km", Forbrug: "22,2 km/l", Acceleration: "0-100km/t - 7,3 sek.", Tophastighed: "245 km/t", Rækkevidde: "1465,2 km.", Kapacitet: "66l" },
    { Bil: "Difference", Brændstof: "-", Pris: "144.770,-", CO2: "118 g/km", Forbrug: "-", Acceleration: "0-100km/t -", Tophastighed: "35 km/t", Rækkevidde: "835,2 km.", Kapacitet: "-" }
];
  var dataTable = document.getElementById("dataTable");

  var headerRow = dataTable.insertRow();
  for (var property in data[0]) {
      var th = document.createElement("th");
      th.textContent = property;
      headerRow.appendChild(th);
  }

  for (var i = 0; i < data.length; i++) {
      var row = dataTable.insertRow();
      var rowData = data[i];
      for (var property in rowData) {
          var cell = row.insertCell();
          cell.textContent = rowData[property];
      }
  }
