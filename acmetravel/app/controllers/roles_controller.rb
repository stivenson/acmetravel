class RolesController < ApplicationController
    def index
        items = Role.all
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
