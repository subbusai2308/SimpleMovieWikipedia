const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)
var request = new XMLHttpRequest()
//Using Ajax Call getting a single movie detials
request.open('GET', 'http://www.omdbapi.com/?apikey=[YourApiKey]&t=' + localStorage.getItem("movie_name"), true)
request.onload = function () {
  var data = JSON.parse(this.response)
  console.log(data);
  console.log(typeof data)
  if (request.status >= 200 && request.status < 400) {
    const card = document.createElement('div')
    const logo = document.createElement('img');
    const p = document.createElement('p');
    const goBackBtn = document.createElement('button');
    card.setAttribute('class', 'card');
    goBackBtn.setAttribute('onclick', 'ViewMovieList();');
    goBackBtn.textContent = 'Back';
    const h1 = document.createElement('h1')
    h1.textContent = data.Title
    logo.src = data.Poster;
    p.textContent = data.Plot;
    container.appendChild(card)
    card.appendChild(h1)
    card.appendChild(logo)
    card.appendChild(p);
    card.appendChild(goBackBtn);
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `MovieWiki is not Working`
    app.appendChild(errorMessage)
  }
}
const ViewMovieList = () => {
  window.location.replace('MovieList.html');
}
request.send()