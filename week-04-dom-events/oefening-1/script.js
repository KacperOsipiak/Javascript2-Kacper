// Voeg een event listener toe aan de knop
const button = document.getElementById('add');
const input = document.getElementById('input')
const list = document.getElementById('list')
button.addEventListener('click', () =>{

    const nieuwitem = document.createElement('li')
nieuwitem.textContent= input.value

list.appendChild(nieuwitem)

// Voeg een verwijderknop toe aan elk <li> element
const verwijderknop = document.createElement('button')
verwijderknop.textContent = 'verwijder'

nieuwitem.appendChild(verwijderknop);

verwijderknop.addEventListener('click', () =>{
    nieuwitem.remove();
})


})
// Maak een <li> element aan met de tekst uit het invoerveld

