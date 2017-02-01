class TagsExpense < ApplicationRecord
	belongs_to :tag
	belongs_to :expense
end
