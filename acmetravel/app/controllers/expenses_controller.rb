class ExpensesController < ApplicationController
    def index
    end

    def indexOfTravel
        items = Expense.where(travel_id: params[:idtravel])
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
