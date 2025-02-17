class Api::V1::StatusController < Api::V1::BaseController
  def show
    render json: { status: 'ok', timestamp: Time.current }
  end
end 