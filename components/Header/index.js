// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(data) {
  // Create Elements
  const header = document.createElement('div')
  const headerDate =  document.createElement('span')
  const headerTitle = document.createElement('h1')
  const temperature = document.createElement('span')

  // Structure of Elements
  header.appendChild(headerDate)
  header.appendChild(headerTitle)
  header.appendChild(temperature)

  // Adding classes to Elements
  header.classList.add('header')
  headerDate.classList.add('date')
  temperature.classList.add('temp')

  // Adding Content 
  headerDate.textContent = 'March 28, 2019'
  headerTitle.textContent = 'Lambda Times'
  temperature.textContent = '98°'

  return header
}

document.querySelector('.header-container').appendChild(Header())