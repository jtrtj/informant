Rails.application.routes.draw do
 get root to: 'welcome#index'
 get '/auth/:privder/callback', to: 'sessions#create'
end
