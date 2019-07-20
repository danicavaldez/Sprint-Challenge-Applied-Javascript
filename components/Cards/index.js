// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(topicData => {
    console.log(topicData)
    articleCreator(topicData.data.articles)
  })
  .catch(error => console.log(error))

const cardContainer = document.querySelector('.cards-container')

function articleCreator(articles) {
  for(let key in articles ) {
    articles[key].forEach(article => cardContainer.appendChild(cardCreator(article)))
  }
}  


function cardCreator(articles) {
  //create elements
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const authorContainer = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const authorName = document.createElement('span')

  //assign classes
  card.classList.add('card')
  headline.classList.add('headline')
  authorContainer.classList.add('author')
  imgContainer.classList.add('img-container')

  //elements structure
  card.appendChild(headline)
  card.appendChild(authorContainer)
  authorContainer.appendChild(imgContainer)
  imgContainer.appendChild(img)
  authorContainer.appendChild(authorName)

  //adding content
  headline.textContent = articles.headline
  img.src = articles.authorPhoto
  authorName.textContent = articles.authorName

  return card
}