// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
// Null-check: toon een melding als er nog niets opgeslagen is
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