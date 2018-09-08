require 'rails_helper'

describe ProPublicaConnection do
  context 'class methods' do
    it '.fetch(params) - makes a git request with provided params' do
      response = ProPublicaConnection.fetch('congress/v1/senate/votes/recent.json')
      expect(response["status"]).to eq("OK")
      expect(response).to have_key("results")
    end
  end
end
