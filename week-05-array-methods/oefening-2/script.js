const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];

// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase(). 
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
document.querySelector('#search-find').addEventListener('input', e => {
  const letter = e.target.value.toLowerCase();
  const found = names.find(n => n.toLowerCase().startsWith(letter));
  document.querySelector('#output-find').textContent = found || 'Geen naam';
  e.target.value = '';
});
// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
document.querySelector('#search-includes').addEventListener('input', e => {
  const naam = e.target.value.toLowerCase();
  const exists = names.some(n => n.toLowerCase() === naam);
  document.querySelector('#output-includes').textContent = exists;
  e.target.value = '';
});