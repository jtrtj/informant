require 'rails_helper'

describe SenateVotePresenter do
  context 'instance methods' do
    it '#most_recent - returns the most recent vote from senate', :vcr do
      vote_presenter = SenateVotePresenter.new

      expect(vote_presenter.most_recent).to be_a(SenateVote)
    end
  end
end
