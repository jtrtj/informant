require 'rails_helper'

describe 'a visitor' do
  context 'navigating to / ' do
    it 'will see a navbar, link to sign up, and a recent vote', :vcr do
      visit '/'
      
      expect(page).to have_css('.nav')
      expect(page).to have_css('.recent-vote')
      expect(page).to have_link('Sign in with Twitter')
    end
  end
end