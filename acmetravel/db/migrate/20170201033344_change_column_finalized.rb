class ChangeColumnFinalized < ActiveRecord::Migration[5.0]
	def change
		change_column :travels, :finalized, :boolean, :default => true
 	end
end
