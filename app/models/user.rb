class User < ApplicationRecord
  validates_presence_of :provider,
                        :uid,
                        :name,
                        :token,
                        :secret,
                        :profile_image
                        
  has_many :user_roles
  has_many :roles, through: :user_roles

  def self.find_or_create_from_auth_hash(auth_hash, role = 'registered_user')
    user = where(
                 provider: auth_hash.provider,
                 uid: auth_hash.uid,
                 ).first_or_initialize #persisted?

    if user.persisted?
      user.update(
                  name: auth_hash.info.nickname,
                  profile_image: auth_hash.info.image,
                  token: auth_hash.credentials.token,
                  secret: auth_hash.credentials.secret
                  )

    else
      user.update(
        name: auth_hash.info.nickname,
        profile_image: auth_hash.info.image,
        token: auth_hash.credentials.token,
        secret: auth_hash.credentials.secret
        )
      user.set_role(role)
    end
    user.save
    user
  end

  def registered_user?
    roles.exists?(name: 'registered_user')
  end

  def set_role(role)
    assigned_role = Role.find_by_name(role)
    UserRole.create(user: self, role: assigned_role)
  end

end
