class UsersController < ApplicationController
  def index
      items = User.all
      render json: items, :status => 200
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
