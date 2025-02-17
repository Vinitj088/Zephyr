class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  protect_from_forgery with: :exception
  helper_method :current_user, :user_signed_in?

  def index
    respond_to do |format|
      format.html { render layout: 'application' }
      format.json { render json: { error: 'Not Found' }, status: :not_found }
      format.any { head :not_acceptable }
    end
  end

  private

  def json_request?
    request.format.json?
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def user_signed_in?
    current_user.present?
  end

  def authenticate_user!
    unless user_signed_in?
      redirect_to root_path, alert: 'Please sign in to continue.'
    end
  end
end
