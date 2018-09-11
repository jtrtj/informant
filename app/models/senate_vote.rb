class SenateVote
  attr_reader :question, :description
  def initialize(data)
    @question = data[:question]
    @description = data[:description]
  end
end