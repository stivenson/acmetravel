class UsersController < ApplicationController
    def index
        items = User.where(:role_id => 2).all
        render json: items, :status => 200
    end

    def show
        item = User.find(params[:id])
        render json: item, :status => 200
    end

    def showWithCredentials
        item = User.where(" email = ? and password = ? and role_id = ? ", login_params[:email],login_params[:password],login_params[:role_id]).first 
        render json: item, :status => 200
    end


    def create
        @user = User.new(user_params)
        render json: @user.save, :status => 200
    end

    def expensesAll 
        items = User.joins(:travels).joins(:travels => :expenses)
                    .select('users.id as users_id, users.cc, users.names, users.surnames, SUM(`expenses`.`amount`) as total')
                    .where('travels.finalized = 1') 
                    .group("users_id")
        render json: items
    end

    private

        def user_params
            params.require(:user).permit(:cc,:names,:surnames,:email,:password,:role_id)
        end

        def login_params
            params.require(:user).permit(:email,:password,:role_id)
        end
end
