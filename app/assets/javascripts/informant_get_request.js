const apiUrl = 'http://localhost:3000/api/v1/most-recent-vote'

fetch(apiUrl)
  .then(response => response.json())
  .then(vote => {
    console.log(vote)
    // debugger;
    var voteData = vote[0]
    var voteTitle = document.querySelector(".vote-date-title")
    voteTitle.innerHTML = `On ${voteData.created_at} The U.S. Senated Voted`
    var voteQuestion = document.querySelector(".vote-question")
    voteQuestion.innerHTML = voteData.question
    var voteDescription = document.querySelector(".vote-description")
    voteDescription.innerHTML = voteData.description

    // var voteArticleCards = document.querySelector(".vote-article-cards")
    var voteArticles = voteData.articles
    var articleCards = voteArticles.map(article => {

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
    $(".vote-article-cards").html(articleCards)
  })
  
      // var recentVote = document.querySelector('.recent-vote')
      // var allVotes = votes.data
      // allVotes.map(vote => {
      //   var voteElement = document.createElement('div')
      //   voteElement.setAttribute('class', 'display-3')
      //   voteElement.innerHTML = `
      //     <h5 class="display-3 vote-question">${vote.question}</h5>
      //     <h3 class="card-text">
      //       ${vote.description}
      //     </h3>
      //   `
      //   recentVote.prepend(voteElement)
      // })


