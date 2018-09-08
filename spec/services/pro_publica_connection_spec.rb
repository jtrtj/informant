require 'rails_helper'

describe ProPublicaConnection do
  context 'class methods' do
    it '.fetch(params) - makes a git request with provided params' do
      conn = ProPublicaConnection.conn
      response = conn.get('congress/v1/senate/votes/recent.json')
      parsed_response_body = JSON.parse(response.body)

      expect(parsed_response_body["status"]).to eq("OK")
      expect(parsed_response_body).to have_key("results")
    end
  end
end
