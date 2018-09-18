class TweetCreator < SimpleDelegator
  def update(params)
    article_id = params[:article]
    article_url = params[:url]
    twitter_client.update(
      "#{article_url} Shared from http://us-informant.herokuapp.com"
    )
    send_tweeted_article_to_api(article_id, uid)
  end
  
  private
  
  def twitter_client
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV['twitter_api_key']
      config.consumer_secret     = ENV['twitter_api_secret_key']
      config.access_token        = token
      config.access_token_secret = secret
    end
  end

  def send_tweeted_article_to_api(article_id, twitter_user_id)
    LogTweetWithApi.new(article_id, twitter_user_id).log
  end
end