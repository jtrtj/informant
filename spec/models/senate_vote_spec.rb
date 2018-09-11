require 'rails_helper'

describe SenateVote do
  context 'attributes' do
    it 'desired instance data' do
      yaml_from_vcr = YAML.load_file('fixtures/vcr_cassettes/FetchVotesService/class_methods/_fetch_senate_votes_-_returns_an_array_of_hashes_containing_vote_data.yml')
      response = eval(yaml_from_vcr["http_interactions"].first["response"]["body"]["string"])
      data = response[:results][:votes].first

      vote = SenateVote.new(data)

      expect(vote.question).to eq(data[:question])  
      expect(vote.description).to eq(data[:description])  
    end
  end
end