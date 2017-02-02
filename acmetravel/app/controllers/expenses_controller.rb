class ExpensesController < ApplicationController
    def index
    end

    def indexOfTravel
        items = Expense.where(travel_id: params[:idtravel])
        render json: items
    end

    def create
        @expense = Expense.new(expense_params)
        render json: @expense.save, :status => 200
    end

    private

        def expense_params
            params.require(:expense).permit(:amount,:travel_id)
        end
end
