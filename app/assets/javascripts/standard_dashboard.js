const votesUrl = 'http://localhost:3000/api/v1/votes'

fetch(votesUrl)
  .then(response => response.json())
  .then(votes => {
    console.log(votes)
    
    let voteCards = votes.map(vote => {
      let voteArticles = vote.articles
      let articleCards = voteArticles.map(article => {

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
      return (
        `<div class="card mb-3 vote">
          <div class="card-header">
            <h2>${vote.number}</h2>
          </div>

          <div class="card-body">
            <h5 class="display-3">
              ${vote.question}
            </h5>
            <h3 class="card-text">
              ${vote.description}
            </h3>
          </div>

          <div class="card-footer">
          <button class="btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            related news
          </button>
          <div class="collapse vote-article-cards" id="collapseExample">
            ${articleCards}
          </div>
        </div>`
      )

    })
    $(".vote-list").html(voteCards)
  })