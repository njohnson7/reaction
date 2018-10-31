class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :text, nil: false
      t.integer :card_id, nil: false
      t.timestamps
    end
  end
end
