const user = { name: 'Anna', age: 28, city: 'Amsterdam' };

// Stap 1: sla het object op zonder JSON.stringify en lees het terug — wat zie je?
// Stap 2: sla het object op MET JSON.stringify en lees het terug met JSON.parse
// Stap 3: toon het resultaat van beide methoden op de pagina
const input = document.getElementById("input");
const saveBtn = document.getElementById("save");
const retrieveBtn = document.getElementById("retrieve");
const result = document.getElementById("result");

// Opslaan
saveBtn.addEventListener("click", () => {
    localStorage.setItem("tekst", input.value);
});

// Ophalen
retrieveBtn.addEventListener("click", () => {
    const opgeslagenTekst = localStorage.getItem("tekst");

    if (opgeslagenTekst === null) {
        result.textContent = "Er is nog niets opgeslagen.";
    } else {
        result.textContent = opgeslagenTekst;
    }
});