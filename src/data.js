import data from "./data/ghibli/ghibli.js";
const allMovies = document.getElementById("allMovies");

export const mostViewed = () => {
  const gallery = document.getElementById("gallery");
  const allPosters = data.films.filter((movies) => movies.most_viewed);

  const images = allPosters.map((item) => {
    const img = document.createElement("img");
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("gallery__img-container");
    img.classList.add("gallery__img");
    p.classList.add("gallery__title");
    img.src = item.poster;
    p.textContent = item.description;

    div.appendChild(img);
    div.appendChild(p);
    return div;
  });

  for (let i = 0; i <= images.length; i++) {
    gallery.appendChild(images[i]);
  }
};

export const movies = () => {
  //esto deja un array de string por lo que se crea una etiqueta imagen para poder insertar el poster
  const imagesMovies = data.films.map((item) => {
    const img = document.createElement("img");
    img.classList.add("posters");
    img.src = item.poster;
    img.width = 100;
    img.heigth = 100;
    //return finaliza el callback
    return img;
  });
  imagesMovies.map((image) => allMovies.appendChild(image));
};

export const searchMovies = () => {
  const text = document.getElementById("search-input").value;
  const searchedMovies = data.films.filter((item) =>
    //se cambia el star with por includes(busca si está en el array y da un boolean)
    item.title.toLowerCase().includes(text.toLowerCase())
  );

  const imagesMovies = searchedMovies.map((item) => {
    const img = document.createElement("img");
    img.classList.add("posters");
    img.src = item.poster;
    img.width = 100;
    img.heigth = 100;
    //return finaliza el callback
    return img;
  });
  allMovies.innerHTML = "";
  imagesMovies.map((image) => allMovies.appendChild(image));
};

export const searchMoviesByDirector = () => {
  const idDirector = document.getElementById("directores");
  const selectedDirector = idDirector.options[idDirector.selectedIndex].value;

  const searchMoviesByDirector = data.films.filter(
    (item) => item.director === selectedDirector
  );

  console.log(searchMoviesByDirector);
  const imagesMovies = searchMoviesByDirector.map((item) => {
    const img = document.createElement("img");
    img.classList.add("posters");
    img.src = item.poster;
    img.width = 100;
    img.heigth = 100;
    //return finaliza el callback
    return img;
  });
  allMovies.innerHTML = "";
  imagesMovies.map((image) => allMovies.appendChild(image));
};

// export const orderMovies = () => {
//   let title = document.getElementById("allMovies").value;

//   let orderdMovies = data.films.sort((item) =>
//     item.title.toLowerCase().sort(text.toLowerCase())
//   );
//   const imagesMovies = title.map((item) => {
//     const img = document.createElement("img");
//     img.classList.add("posters");
//     img.src = item.poster;
//     img.width = 100;
//     img.heigth = 100;
//     //return finaliza el callback
//     return img;
//   });
//   allMovies.innerHTML = "";
//   imagesMovies.map((image) => allMovies.appendChild(image));
// };

// for (let i = 0; i <= images.length ; i++) {
//   allMovies.appendChild(images[i])
// }

// export const showMovies = () => {
//   data.forEach(movie => {
//     const movieDiv = document.createElement("div");
//     const movieTitle = document.createElement("h2");
//     const movieImage = document.createElement("img");

//     movieTitle.textContent = movie.title;
//     movieImage.src = movie.poster;

//     movieDiv.appendChild(movieTitle);
//     movieDiv.appendChild(movieImage);

//     allMovies.appendChild(movieDiv)
//   })
// }
