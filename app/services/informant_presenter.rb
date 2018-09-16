class InformantPresenter < SimpleDelegator
  def nav
    
    binding.pry
    
    if registered_user?
      'user_nav.html.erb'
    else
      'standard_nav.html.erb'
    end
  end
end