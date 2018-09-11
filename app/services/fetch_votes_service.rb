class FetchVotesService
  def self.fetch_senate_votes
    json_senate_votes = conn.get('/congress/v1/senate/votes/recent.json')
    JSON.parse(json_senate_votes.body, symbolize_names: true)[:results][:votes]
  end

  private

  def self.conn
    ProPublicaConnection.conn
  end
end