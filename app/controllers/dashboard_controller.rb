class DashboardController < ApplicationController
  def index
    @presenter = InformantPresenter.new(current_user)
  end
end