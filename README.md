# Informant
### Ever wonder what happened recently in the US Senate? Utilizing the ProPublica API and News API, Informant shows users the last month's worth of Senate activity and related news. If a user signs in with Twitter, they can share news articles through tweets.
Informant is live [here](https://us-informant.herokuapp.com/).
The front-facing application gathers all of its information from an internal [API](https://github.com/jtrtj/informant-senate-api) built to consume data from [ProPublica](https://www.propublica.org/) and [News API](https://newsapi.org/).

* Technologies used
  * Ruby 2.4.1 and Rails 5.1.6
  * Fetch API
  * Twitter OAuth
