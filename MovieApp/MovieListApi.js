const app = document.getElementById('root')
var count = 0;
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)
var request = new XMLHttpRequest()
//Using Ajax Call getting movie detials
request.open('GET', 'http://www.omdbapi.com/?apikey=[YourApiKey]&s=' + localStorage.getItem("movie"), true)
request.onload = function () {
  var data = JSON.parse(this.response)
  console.log(data);
  console.log(typeof data)
  if (request.status >= 200 && request.status < 400) {
    data.Search.forEach(movie => {
      var card = document.createElement('div');
      card.setAttribute('id', movie.Title);
      const logo = document.createElement('img');
      card.setAttribute('class', 'card');
      var text = '"' + movie.Title + '"';
      card.setAttribute('onclick', 'myapp(' + text + ')');
      const h1 = document.createElement('h1')
      h1.textContent = movie.Title
      logo.src = movie.Poster;
      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(logo)
      count += 1;
    });
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Movie wiki isn't working`
    app.appendChild(errorMessage)
  }
}
request.send()
function myapp(id) {
  var data = id;
  console.log(data);
  localStorage.setItem("movie_name", data);
  window.location.replace("ViewPlot.html");
}