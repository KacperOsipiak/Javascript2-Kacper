// Stap 1: Schrijf calculateTotal(bedrag, korting)
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
// Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is
// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij
function calculateTotal(bedrag, korting) {
  // Bereken het totaalbedrag na korting
 return bedrag - (bedrag * (korting / 100));
}

const form = document.getElementById("discount-form");
const amount = document.getElementById("amount");
const discount = document.getElementById("discount");
const result = document.getElementById("result");
const button = document.getElementById("Clickfunctie")
 
 
  button.addEventListener("click", function (e) {
    e.preventDefault();
 
    if (amount.value === "" || discount.value === "") {
      result.textContent = "Geen waarde ingevuld.";
      return;
    }
    const b = Number(amount.value);
    const k = Number(discount.value);
    const total = calculateTotal(b, k);
    result.textContent = "Totaal: €" + total.toFixed(2);
  });
 
 
 
function Clickfunctie() {
  if (result) {
    result.textContent = "Knop geklikt — berekenen...";
  }
}
