// Gem en reference til inputfeltet og billederne
var elbilInput = document.querySelector(".elbil");
var elbilBillede = document.querySelector(".elbilbillede");
var bilInput = document.querySelector(".bil");
var benzinBillede = document.querySelector(".benzinbillede");

// Skjul billedene ved start
elbilBillede.style.display = "none";
benzinBillede.style.display = "none";

// Lyt efter ændringer i elbil inputfeltet
elbilInput.addEventListener("input", function() {
  var searchText = elbilInput.value.toLowerCase();

  // Check om søgeteksten starter med "elbil"
  if (searchText.startsWith("elbil")) {
    // Vis elbilbilledet
    elbilBillede.style.display = "block";
  } else {
    // Skjul elbilbilledet
    elbilBillede.style.display = "none";
  }
});

// Lyt efter ændringer i bil inputfeltet
bilInput.addEventListener("input", function() {
  var searchText = bilInput.value.toLowerCase();

  // Check om søgeteksten starter med "bil"
  if (searchText.startsWith("bil")) {
    // Vis benzinbilledet
    benzinBillede.style.display = "block";
  } else {
    // Skjul benzinbilledet
    benzinBillede.style.display = "none";
  }
});

var sammenlignBillede = document.getElementById("sammenlignBillede");

// Lyt efter ændringer i elbil inputfeltet og bil inputfeltet
elbilInput.addEventListener("input", updateSammenlignBillede);
bilInput.addEventListener("input", updateSammenlignBillede);

// Funktion til at opdatere sammenligningsbilledet
function updateSammenlignBillede() {
  var elbilSearchText = elbilInput.value.toLowerCase();
  var bilSearchText = bilInput.value.toLowerCase();

  // Tjek om søgeteksten starter med "elbil" og "bil"
  if (elbilSearchText.startsWith("elbil") && bilSearchText.startsWith("bil")) {
    sammenlignBillede.src = "billeder/tabel1.png"; // Opdater billedets kilde
  } else {
    sammenlignBillede.src = "billeder/tabel.png"; // Gendan standardbilledet
  }
}