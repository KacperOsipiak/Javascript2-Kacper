let carlist = document.getElementById("carlist");

let cars = [
    {
        "naam": 'fiat',
        "model": '500',
        "jaar": 2008,
        "kilometerstand": 145000
    },
    {
        "naam": 'volvo',
        "model": 's60',
        "color": 'grey',
    }

    {
        "naam": 'bmw',
        "model": 'x7',
        "color": 'black',
    }
]
    
    fetch('/cars.json')
    .then(response => response.json())
    .then(data => {
          for (let car of data) {
        carlist.innerHTML += `
        <p>${car.name}</p>`
    }
    })
    
    
  