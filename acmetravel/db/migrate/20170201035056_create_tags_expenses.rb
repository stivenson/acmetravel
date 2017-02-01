class CreateTagsExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :tags_expenses do |t|
    	t.references :expense, foreign_key: true
    	t.references :tag, foreign_key: true
    	t.timestamps
    end
  end
end
