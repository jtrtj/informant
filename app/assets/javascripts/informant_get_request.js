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
             <a href="${article.url}" class="btn btn-raised btn-success" target="_blank">${article.source}</a>
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
          <h3><em>On ${vote.created_at} The U.S. Senate Voted On:</em></h3>
            <h3>Vote Number ${vote.number}</h3>
          </div>

          <div class="card-body">
            <h2 class="display-4">
              <small>${vote.question}</small>
            </h2>
            <h2 class="card-text">
              ${vote.description}
            </h2>
            <h2 class="card-text">
              Result: <mark>${vote.result}</mark>
            </h2>
          </div>

          <div class="card-footer">
          <button class="btn btn-raised btn-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            related news
          </button>
          <a href="/dashboard" class="btn">Go to the dashboard to see more</a>
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


