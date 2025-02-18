class User < ApplicationRecord
  has_many :notes, dependent: :destroy
  validates :provider, presence: true
  validates :uid, presence: true
  validates :email, presence: true, uniqueness: true

  def self.from_omniauth(auth)
    user = where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.name = auth.info.name
      user.avatar_url = auth.info.image
    end

    user.update(
      token: auth.credentials.token,
      refresh_token: auth.credentials.refresh_token,
      token_expires_at: Time.at(auth.credentials.expires_at)
    )

    user
  end
end
