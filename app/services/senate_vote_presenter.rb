class SenateVotePresenter
  attr_reader :date
  def initialize
    @date = Date.today
  end

  def most_recent
    votes.first
  end

  def votes
    fetch_recent_votes.map do |vote|
      SenateVote.new(vote)
    end
  end

  private

  def fetch_recent_votes
    @recent_votes ||= FetchVotesService.fetch_senate_votes
  end
end