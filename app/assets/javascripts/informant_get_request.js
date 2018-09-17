function getVotes(path) {
  const root = 'https://us-informant-senate.herokuapp.com';
  const url = root + path;
  const promise = fetch(url)
                  .then((response) => response.json());
  return promise;
}
function makeVoteArticles(vote) {
  if ( vote.articles.length >= 1) {
    return vote.articles.map(article => {
      return (
        `<div class="card">
           <div class="card-body">
             <h5 class="card-title">${article.title}</h5>
             <p class="card-text">${article.description}</p>
             <a href="${article.url}" class="btn">${article.source}</a>
           </div>
        </div>`
      )
    })
  } else {
    return (
    `<div class="card">
      <div class="card-body">
        <h5 class="card-title">No News Found</h5>
      </div>
    </div>`
    )
  }
};
function makeVoteCard(votesData, cssClass) {
  let cards = votesData.map(vote => {
    let articleCards = makeVoteArticles(vote)
    console.log(vote.articles)
    return (
      `
        <div class="card vote">
          <div class="card-header">
            <h3>${vote.number} ${vote.created_at}</h3>
          </div>

          <div class="card-body">
            <h5 class="display-3">
              ${vote.question}
            </h5>
            <h3 class="card-text">
              ${vote.description}
            </h3>
            <h3 class="card-text">
              Result: ${vote.result}
            </h3>
          </div>

          <div class="card-footer">
          <button class="btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            related news
          </button>
          <div class="collapse vote-article-cards" id="collapseExample">
            ${makeVoteArticles(vote)}
          </div>
        </div>
      `
    )

  })
  $(cssClass).html(cards)
}



getVotes('/api/v1/most-recent-vote')
.then((response) => makeVoteCard((response), ".recent-vote"));
// const apiUrl = 'https://us-informant-senate.herokuapp.com/api/v1/most-recent-vote'

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(vote => {
//     console.log(vote)
//     // debugger;
//     var voteData = vote[0]
//     var voteTitle = document.querySelector(".vote-date-title")
//     voteTitle.innerHTML = `On ${voteData.created_at} The U.S. Senated Voted`
//     var voteQuestion = document.querySelector(".vote-question")
//     voteQuestion.innerHTML = voteData.question
//     var voteDescription = document.querySelector(".vote-description")
//     voteDescription.innerHTML = voteData.description

//     // var voteArticleCards = document.querySelector(".vote-article-cards")
//     var voteArticles = voteData.articles
//     var articleCards = voteArticles.map(article => {

//       return (
//         `<div class="card">
//            <div class="card-body">
//              <h5 class="card-title">${article.title}</h5>
//              <p class="card-text">${article.description}</p>
//              <a href="${article.url}" class="btn">${article.source}</a>
//            </div>
//         </div>`
//       )
     
//     })
//     $(".vote-article-cards").html(articleCards)
//   })
  
//       // var recentVote = document.querySelector('.recent-vote')
//       // var allVotes = votes.data
//       // allVotes.map(vote => {
//       //   var voteElement = document.createElement('div')
//       //   voteElement.setAttribute('class', 'display-3')
//       //   voteElement.innerHTML = `
//       //     <h5 class="display-3 vote-question">${vote.question}</h5>
//       //     <h3 class="card-text">
//       //       ${vote.description}
//       //     </h3>
//       //   `
//       //   recentVote.prepend(voteElement)
//       // })



