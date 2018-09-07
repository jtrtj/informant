require 'rails_helper'

describe 'a visitor' do
  context 'navigating to / ' do
    it 'will see a navbar, link to sign up, and a recent vote' do
      visit '/'

      expect(page).to have_css('.navbar')
      expect(page).to have_css('.recent-voter')
      expect(page).to have_link('sign up')
      expect(page).to have_link('log in')
    end
  end
end