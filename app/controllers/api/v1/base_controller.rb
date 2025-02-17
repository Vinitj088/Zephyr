class Api::V1::BaseController < ApplicationController
  protect_from_forgery with: :null_session
  include ActionController::Flash
  
  private

  def render_error(message, status = :unprocessable_entity)
    render json: { error: message }, status: status
  end
end 