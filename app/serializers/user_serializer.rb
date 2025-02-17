class UserSerializer
  include JSONAPI::Serializer
  
  attributes :id, :email, :created_at
  
  attribute :id do |user|
    user.id.to_s
  end
end 