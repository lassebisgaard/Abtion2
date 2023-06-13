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
  var searchText = elbilInput.value.toLowerCase().trim(); // Konverter til lowercase og fjern mellemrum

  // Check om søgeteksten indeholder "mercedes - eqe 300 aut."
  if (searchText.includes("mercedes - eqe 300 aut.")) {
    // Vis elbilbilledet
    elbilBillede.style.display = "block";
  } else {
    // Skjul elbilbilledet
    elbilBillede.style.display = "none";
  }
});

// Lyt efter ændringer i bil inputfeltet
bilInput.addEventListener("input", function() {
  var searchText = bilInput.value.toLowerCase().trim();

  // Check om søgeteksten indeholder "mercedes - c 220 d aut. advantage"
  if (searchText.includes("mercedes - c 220 d aut. advantage")) {
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
  var elbilSearchText = elbilInput.value.toLowerCase().trim(); // Konverter til lowercase og fjern mellemrum
  var bilSearchText = bilInput.value.toLowerCase().trim();

  // Tjek om søgeteksten indeholder "mercedes - eqe 300 aut." og "mercedes - c 220 d aut. advantage"
  if (elbilSearchText.includes("mercedes - eqe 300 aut.") && bilSearchText.includes("mercedes - c 220 d aut. advantage")) {
    sammenlignBillede.src = "billeder/tabel1.png"; // Opdater billedets kilde
  } else {
    sammenlignBillede.src = "billeder/tabel.png"; // Gendan standardbilledet
  }
}