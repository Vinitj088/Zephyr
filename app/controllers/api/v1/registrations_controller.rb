class Api::V1::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  skip_before_action :verify_authenticity_token
  
  def create
    build_resource(sign_up_params)

    if resource.save
      render json: {
        status: { code: 200, message: 'Signed up successfully.' },
        data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
      }
    else
      render json: {
        status: { message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}" }
      }, status: :unprocessable_entity
    end
  end

  private

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end 