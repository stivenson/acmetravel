class TagsexpensesController < ApplicationController
  def index
  end

  def indexOfExpense 
    items = TagsExpense.joins(:tag).select('tags_expenses.*, tags.text').where(expense_id: params[:idexpense])
    render json: items
  end

  def importantTags 
    items = TagsExpense.joins(:tag)
                    .select('tags.id, tags.text, COUNT(`tags_expenses`.`tag_id`) as total')
                    .group("tag_id").order(' COUNT(`tags_expenses`.`tag_id`) DESC ')
                    .limit(5)
    render json: items
  end

  def create
        @tagexpense = TagsExpense.new(tagexpense_params)
        render json: @tagexpense.save, :status => 200
  end

    private

        def tagexpense_params
            params.require(:tagsexpense).permit(:tag_id,:expense_id)
        end
end
