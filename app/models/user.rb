class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: [:facebook]

  has_many :schedules
  has_many :rewards_redemption

   def self.from_omniauth(auth)
     where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
       user.provider = auth.provider
       user.uid = auth.uid
       user.email = auth.info.email
       user.full_name = auth.info.name
       user.facebook_profile_picture = auth.info.image
       user.facebook_auth_token = auth.credentials.token
       user.password = Devise.friendly_token[0,20]
     end
   end

end
