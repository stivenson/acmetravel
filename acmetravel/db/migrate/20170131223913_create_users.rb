class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
    	t.string :names
    	t.string :surnames
    	t.string :cc
    	t.references :role, foreign_key: true
    	t.timestamps
    end
  end
end

=begin

    add_column
    add_index
    change_column
    change_table
    create_table
    drop_table
    remove_column
    remove_index
    rename_column
	
=end
