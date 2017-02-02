class TagsexpensesController < ApplicationController
  def index
  end

  def indexOfExpense 
    items = TagsExpense.joins(:tag).select('tags_expenses.*, tags.text').where(expense_id: params[:idexpense])
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
