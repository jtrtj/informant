class WelcomeController < ApplicationController
  def index
    @vote = SenateVotePresenter.new.most_recent
  end
end