class DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @notes = current_user.notes.order(created_at: :desc)
  end
end 