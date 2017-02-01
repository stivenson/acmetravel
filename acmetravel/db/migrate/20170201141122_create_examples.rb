class CreateExamples < ActiveRecord::Migration[5.0]
  def change
    create_table :examples do |t|
      t.string :name
      t.integer :cc
      t.boolean :active
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
