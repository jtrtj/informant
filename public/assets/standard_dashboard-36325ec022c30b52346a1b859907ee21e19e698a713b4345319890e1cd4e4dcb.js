function getVotes(t){return fetch("https://us-informant-senate.herokuapp.com"+t).then(t=>t.json())}function makeVoteArticles(t){return t.articles.length>=1?t.articles.map(t=>`<div class="card">\n           <div class="card-body">\n             <h5 class="card-title">${t.title}</h5>\n             <p class="card-text">${t.description}</p>\n             <a href="${t.url}" class="btn btn-raised btn-success" target="_blank">Source: ${t.source}</a>\n             <a href="/auth/twitter" class="btn">Sign in to share on Twitter</a>\n           </div>\n        </div>`).join(""):'<div class="card">\n      <div class="card-body">\n        <h5 class="card-title">No News Found</h5>\n      </div>\n    </div>'}function makeVoteCard(t,a){console.log(t);let e=t.map(t=>`<div class="col-sm-6"\n        <div class="card mb-3 vote">\n          <div class="card-header">\n            <h3><em>Vote Number ${t.number} - ${t.created_at}</em></h3>\n          </div>\n\n          <div class="card-body">\n            <h3 class="card-text">\n              ${t.description}\n            </h3>\n            <h3 class="display-6">\n              <ins>${t.question}</ins>\n            </h3>\n            <h3 class="card-text">\n              Result: <mark>${t.result}</mark>\n            </h3>\n          </div>\n\n          <div class="card-footer">\n            <button class="btn" type="button" data-toggle="collapse" data-target="#collapse-${t.id}" aria-expanded="false" aria-controls="collapse-${t.id}">\n              related news\n            </button>\n            <div class="collapse vote-article-cards" id="collapse-${t.id}">\n              ${makeVoteArticles(t)}\n            </div>\n          </div>\n        </div>\n      </div>`);$(a).html(e)}getVotes("/api/v1/votes").then(t=>makeVoteCard(t,".vote-list"));