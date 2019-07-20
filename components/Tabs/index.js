// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsContainer = document.querySelector('.topics')

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then( resolve => {
    console.log('topics', resolve)
    resolve.data.topics.forEach( topic => topicsContainer.appendChild(tabCreator(topic)))
  })
  .catch(error => console.log('error', error))


function tabCreator(topicItems) {
  const topicTab = document.createElement('div')
  topicTab.classList.add('tab')
  topicTab.textContent = topicItems

  return topicTab
}
