require 'rails_helper'

describe 'a twitter user' do
  context 'visiting root' do
    it 'can sign in with twitter' do
      stub_omniauth

      visit '/'

      expect(page).to_not have_content('log out')

      click_on 'sign in with twitter'

      expect(current_path).to eq(dashboard_path)
      expect(User.last.uid).to eq(stub_omniauth["uid"])
      expect(page).to have_content('log out')
    end
  end
end