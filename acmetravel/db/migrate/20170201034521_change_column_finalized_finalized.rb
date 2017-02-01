class ChangeColumnFinalizedFinalized < ActiveRecord::Migration[5.0]
 	def change
 		change_column :travels, :finalized, :boolean, :default => false
 	end
end
