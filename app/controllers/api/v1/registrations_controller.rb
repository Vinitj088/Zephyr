class Api::V1::RegistrationsController < Api::V1::BaseController
  def create
    auth_hash = request.env['omniauth.auth']
    
    if auth_hash
      user = User.find_or_create_by_oauth(auth_hash)
      
      if user.persisted?
        session[:user_id] = user.id
        render json: {
          status: { code: 200, message: 'Signed in successfully.' },
          data: {
            id: user.id,
            email: user.email,
            name: user.name,
            image_url: user.image_url
          }
        }
      else
        render json: {
          status: { message: "Authentication failed: #{user.errors.full_messages.join(', ')}" }
        }, status: :unprocessable_entity
      end
    else
      render json: {
        status: { message: 'Authentication data missing' }
      }, status: :bad_request
    end
  end
end 