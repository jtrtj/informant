require 'rails_helper'

describe 'a twitter user' do
  context 'visiting root' do
    it 'can sign in with twitter' do
      Role.create(name: 'registered_user')
      stub_omniauth

      visit '/'

      expect(page).to_not have_content('log out')

      click_on 'Sign in with Twitter'
      

      expect(current_path).to eq(dashboard_path)
      expect(User.last.uid).to eq(stub_omniauth["uid"])
      expect(page).to have_content('log out')
      expect(page).to have_content(stub_omniauth["info"]["nickname"])
    end
  end
end