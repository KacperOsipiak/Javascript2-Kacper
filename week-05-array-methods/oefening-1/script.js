const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

// Filter: toon alleen scores boven de 50 in #result-filtered
const filtered = scores.filter(score => score > 50);
resultFiltered.textContent = `Scores boven 50: ${filtered.join(', ')}`;
// Map: verdubbel alle scores en toon in #result-map
const doubled = scores.map(score => score * 2);
resultMap.textContent = `Verdubbeld: ${doubled.join(', ')}`;
// Sort: sorteer van laag naar hoog en toon in #result-sorted
const sorted = [...scores].sort((a, b) => a - b);
resultSorted.textContent = `Gesorteerd: ${sorted.join(', ')}`;

