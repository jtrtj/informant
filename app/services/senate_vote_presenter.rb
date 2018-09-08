class SenateVotePresenter
  def initialize
    @date = Date.today
  end

  def most_recent
    fetch_recent_votes.first
  end

  def fetch_recent_votes
    FetchVotesService.fetch_senate_votes.map do |vote|
      SenateVote.new(vote)
    end
  end
end