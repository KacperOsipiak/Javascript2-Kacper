// Vul eerst movies.json met minimaal 4 films:
// [{"title":"","director":"","year":0,"genre":""}]

// Schrijf daarna de fetch zelf (zelfde patroon als oefening 1)

fetch("movies.json")
  .then(response => response.json())
  .then(data => {
    const films = document.getElementById("films");

    data.forEach(movie => {
      films.innerHTML += `
        <p>
          <strong>${movie.title}</strong> -
          ${movie.director} (${movie.year}) -
          ${movie.genre}
        </p>
      `;
    });
  })
  .catch(error => console.error('Fout:', error));
