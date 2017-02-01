class CreateRoles < ActiveRecord::Migration[5.0]
  def change
    create_table :roles do |t|
    	t.string :name
        t.timestamps
    end
  end
end



=begin

    :binary
    :boolean
    :date
    :datetime
    :decimal
    :float
    :integer
    :bigint
    :primary_key
    :references
    :string
    :text
    :time
    :timestamp

=end