class TweetController < ApplicationController
  def new
    tweet = TweetCreator.new(current_user)
    tweet.update(tweet_params)
    # client = Twitter::REST::Client.new do |config|
    #   config.consumer_key        = ENV['twitter_api_key']
    #   config.consumer_secret     = ENV['twitter_api_secret_key']
    #   config.access_token        = current_user.token
    #   config.access_token_secret = current_user.secret
    # end
    # client.update(params[:url])
    redirect_to dashboard_path
    flash[:success] = "Article shared on twitter!"
  end

  private

  def tweet_params
    params.permit(:article, :url)
  end
end