window.cardMovieTemplate = movie => {
  console.log(movie);
  
  return ` 
    <div><img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="" class="img-thumbnail"></div>
    <h5 class="title">${movie.title}</h5>
    <p><span class="">País:</span> ${movie.Country}</p>
    <p><span class="">Año:</span> ${movie.release_date}</p>
    <p><span class="">Género:</span> ${movie.genre}</p>
    <p><span class="">Duración:</span> ${movie.Runtime}</p>
    <p><span class="">Sinopsis:</span> ${movie.overview}</p>
    `;
};

window.showSliderMoviesTemplate = (slider) =>{
  return `
  <div class = "slider"  id="${slider.imdbID}">
    <ul>
        <img src="${slider.Poster}">
        <h5 class="title">${slider.Title}</h5> 
    </ul>
  </div>
  `;
}