class Api::V1::AuthController < Api::V1::BaseController
  def show
    render json: { message: "Authentication endpoint" }
  end
end 