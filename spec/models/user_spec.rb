require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validations' do
    it { should validate_presence_of(:provider) }
    it { should validate_presence_of(:uid) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:token) }
    it { should validate_presence_of(:secret) }
    it { should validate_presence_of(:profile_image) }
  end

  context 'relationships' do
    it { should have_many(:user_roles) }
    it { should have_many(:roles) }
  end
end
