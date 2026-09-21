// Voeg een event listener toe aan elke knop
// Knop 1: voeg tekst toe aan #message
const knop1 = document.querySelector('#btn-1')
const messageelement = document.querySelector('#message');
// Knop 2: voeg een <li> toe aan #list met een tekst
const knop2 = document.querySelector('#btn-2')
const nieuwItem = document.createElement('li');
// Knop 3: wissel de klasse 'active' op #message
const knop3 = document.querySelector('#btn-3')
document.querySelector('#message').classList.toggle('active');