class Travel < ApplicationRecord
	belongs_to :user
	has_many :expenses
	validates :description, presence: :true
end
