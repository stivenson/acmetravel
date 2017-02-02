class TravelsController < ApplicationController
  def index
    items = Travel.all
    render json: items
  end

  def indexOfEmployee
    items = Travel.where(user_id: params[:idemployee])
    render json: items
  end

    def create
        @travel = Travel.new(travel_params)
        render json: @travel.save, :status => 200
    end

    private

        def travel_params
            params.require(:travel).permit(:description,:finalized,:user_id)
        end

end
