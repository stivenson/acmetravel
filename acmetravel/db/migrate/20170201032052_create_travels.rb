class CreateTravels < ActiveRecord::Migration[5.0]
  def change
    create_table :travels do |t|
      t.string :description
      t.boolean :finalized
      t.references :user, foreign_key: true
      t.timestamps 
    end
  end
end
