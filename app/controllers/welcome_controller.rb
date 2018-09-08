class WelcomeController < ApplicationController
  def index
    @vote_presenter = SenateVotePresenter.new.most_recent
  end
end
