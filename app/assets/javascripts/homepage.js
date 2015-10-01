//
// function outputLow(movies) {
//   var filteredMovies =  movies.filter(function(movie){
//    return (movie.budget)=== 55;
//
//   });
//   var lowBudgetTitles = filteredMovies.map(function(movie){
//     return (movie.title)
//   })
//
//    lowBudgetTitles.forEach(function(movie){
//    $(".budget").append("<p>" + movie + "</p>")
//   })
// }


function formatMovies(divname, movies) {
  $(divname).html("");
  movies.forEach(function(movie) {
    $(divname).append(
      '<div class="movie"><p>' + movie.title + '</p></div>'
    );
  });
}

$(window).ready(function() {
  $('button').on('click', function() {
    $.getJSON('/movies.json', function(data) {
      var movies= data.movies
      var lowBudgetTitles = _.where(movies, { budget: 55 });
      formatMovies('.low-budget', lowBudgetTitles);

      var leoMovies = _.filter(movies, function(movie) {
        return _.contains(movie.stars, 'Leonardo DiCaprio');
      });
      formatMovies('.leo-movies', leoMovies);
    });
  });
});




// $(window).ready(function(){
//
//   $('button').on( 'click', function(){
//     $(".budget").html("")
//     $.getJSON("/movies.json").then(function(data){
//       var movies = data.movies;
//
//       var leoMovies = _.filter(movies,function(movie){
//        return _.contains(movie.stars, "Leonardo DiCaprio");
//
//     })
//
//     console.log(leoMovies);
//       outputLow(movies)
//
//
//     })
//
//   })
//
//
//
// });
