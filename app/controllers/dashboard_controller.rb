class DashboardController < ApplicationController
  def index
    user = current_user || User.new
    @presenter = InformantPresenter.new(user)
  end
end