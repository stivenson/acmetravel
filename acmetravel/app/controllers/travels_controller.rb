class TravelsController < ApplicationController
  def index
    items = Travel.all
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
