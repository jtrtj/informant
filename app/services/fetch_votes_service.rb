class FetchVotesService
  def self.fetch_senate_votes
    json_senate_votes = ProPublicaConnection.fetch("congress/v1/senate/votes/recent.json")
    JSON.parse(json_senate_votes, symbolize_names: true)
  end
end