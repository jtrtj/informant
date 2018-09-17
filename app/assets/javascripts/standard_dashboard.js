function getVotes(path) {
  const root = 'http://localhost:3000';
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
             <a href="${article.url}" class="btn" target="_blank">${article.source}</a>
             <a href="/share?article=${article.id}&url=${article.url}" class="btn" target="_blank">Share on Twitter</a>
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
  console.log(votesData)
  let cards = votesData.map(vote => {
    let articleCards = makeVoteArticles(vote)
    console.log(vote.articles)
    return (
      `<div class="col-sm-6"
        <div class="card mb-3 vote">
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
          <button class="btn" type="button" data-toggle="collapse" data-target="#collapse-${vote.id}" aria-expanded="false" aria-controls="collapse-${vote.id}">
            related news
          </button>
          <div class="collapse vote-article-cards" id="collapse-${vote.id}">
            ${makeVoteArticles(vote)}
          </div>
        </div>
      </div>`
    )

  })
  $(cssClass).html(cards)
}



getVotes('/api/v1/votes')
.then((response) => makeVoteCard((response), ".vote-list"));
// const votesUrl = 'https://us-informant-senate.herokuapp.com/api/v1/votes'

// fetch(votesUrl)
//   .then(response => response.json())
//   .then(votes => {
//     console.log(votes)
    
//     let voteCards = votes.map(vote => {
//       let voteArticles = vote.articles
//       let articleCards = voteArticles.map(article => {

//         return (
//           `<div class="card">
//              <div class="card-body">
//                <h5 class="card-title">${article.title}</h5>
//                <p class="card-text">${article.description}</p>
//                <a href="${article.url}" class="btn">${article.source}</a>
//              </div>
//           </div>`
//         )
       
//       })
//       return (
//         `<div class="col-sm-6"
//           <div class="card mb-3 vote">
//             <div class="card-header">
//               <h3>${vote.number} ${vote.created_at}</h3>
//             </div>

//             <div class="card-body">
//               <h5 class="display-3">
//                 ${vote.question}
//               </h5>
//               <h3 class="card-text">
//                 ${vote.description}
//               </h3>
//             </div>

//             <div class="card-footer">
//             <button class="btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
//               related news
//             </button>
//             <div class="collapse vote-article-cards" id="collapseExample">
//               ${articleCards}
//             </div>
//           </div>
//         </div>`
//       )

//     })
//     $(".vote-list").html(voteCards)
//   })