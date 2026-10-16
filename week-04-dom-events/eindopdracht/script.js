// Selecteer het formulier, invoerveld, takenlijst en teller
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const lijst = document.getElementById('tasks');
const teller = document.getElementById('counter');
 
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
function taakToevoegen(tekst) {
  const item = document.createElement('li');
  item.innerHTML = `<input type="checkbox"> ${tekst} <button>Verwijder</button>`;
  item.querySelector('button').addEventListener('click', () => {
    item.remove();
    toonTaken();
  });
  lijst.appendChild(item);
}
 
// toonTaken() — werk de teller bij
function toonTaken() {
  let aantal = 0;
  for (const li of lijst.querySelectorAll('li')) {
    aantal++;
  }
  teller.textContent = `${aantal} taken`;
}
 
// Voeg listeners toe aan het formulier en de taken
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!input.value.trim()) return;
  taakToevoegen(input.value.trim());
  toonTaken();
  input.value = '';
});
 