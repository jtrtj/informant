class InformantPresenter
  def initialize(user)
    @user = user || User.new
  end

  def nav 
    if user.registered_user?
      'user_nav.html.erb'
    else
      'standard_nav.html.erb'
    end
  end

  def name
    user.name
  end

  private
  attr_reader :user
end