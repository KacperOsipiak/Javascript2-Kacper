// Stap 1: Selecteer het formulier en de profielenlijst
const f = document.getElementById("f");
const list = document.getElementById("list");

// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
f.addEventListener("submit", e => {
  e.preventDefault();
  // hier komt de rest
});

// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart
const name = document.getElementById("n").value;
const role = document.getElementById("r").value;
const dept = document.getElementById("d").value;
