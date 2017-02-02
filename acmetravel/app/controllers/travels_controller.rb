class TravelsController < ApplicationController
  def index
    items = Travel.all
    render json: items
  end

  def indexOfEmployee
    items = Travel.where(user_id: params[:idemployee])
    render json: items
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
