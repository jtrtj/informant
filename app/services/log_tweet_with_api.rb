class LogTweetWithApi
  def initialize(article_id, twitter_user_id)
    @article_id = article_id
    @uid = twitter_user_id
  end

  def log
    conn.post do | req |
      req.url '/api/v1/tweeted-articles'
      req.params['uid'] = @uid
      req.params['article'] = @article_id
    end
  end

  private

  def conn
    Faraday.new(url: 'https://us-informant-senate.herokuapp.com') do | faraday |
      faraday.request  :url_encoded
      faraday.response :logger   
      faraday.adapter Faraday.default_adapter
    end
  end
end