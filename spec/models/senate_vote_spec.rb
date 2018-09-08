require 'rails_helper'

describe SenateVote do
  context 'attributes' do
    it 'desired instance data' do
      data = {
        question: 'Huh?',
        description: 'Great cool stuff.'
      }
      vote = SenateVote.new(data)

      expect(vote.question).to eq(data[:question])  
      expect(vote.description).to eq(data[:description])  
    end
  end
end