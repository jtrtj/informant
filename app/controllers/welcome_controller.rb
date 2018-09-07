class WelcomeController < ApplicationController
  def index
    @vote_presenter = VotePresenter.new.most_recent
  end
end
