class FetchVotesService
  include JsonParser

  def self.fetch_senate_votes
    json_senate_votes = ProPublicaConnection.fetch("congress/v1/senate/votes/recent.json")
    json_parse_symbolize_names(json_senate_votes)
  end
end