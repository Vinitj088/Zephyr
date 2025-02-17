class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:dashboard]
  before_action :redirect_if_authenticated, only: [:login, :signup]

  def index
  end

  def login
    render 'auth/login'
  end

  def signup
    render 'auth/signup'
  end

  def dashboard
    render 'dashboard/index'
  end

  private

  def redirect_if_authenticated
    redirect_to dashboard_path if user_signed_in?
  end
end 