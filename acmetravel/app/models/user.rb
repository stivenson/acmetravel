class User < ApplicationRecord
	belongs_to :role
	has_many :travels
end
