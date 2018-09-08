require 'rails_helper'

describe FetchVotesService do
  context 'class methods' do
    it '.fetch_senate_votes - returns an array of hashes containing vote data' do
      vote_data = FetchVotesService.fetch_senate_votes
      
      expect(vote_data.first).to have_key(:question)
      expect(vote_data.last).to have_key(:description)
      expect(vote_data.first).to have_key(:result)
      expect(vote_data.first[:total]).to have_key(:yes)
      expect(vote_data.last[:total]).to have_key(:no)
      expect(vote_data.first[:total]).to have_key(:present)
      expect(vote_data.last[:total]).to have_key(:not_voting)
    end
  end
end