class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.integer 'list_id', 'board_id'
      t.string 'description', 'title'
      t.string 'labels', array: true, default: []
      t.datetime 'due_date'
      t.timestamps
    end
  end
end
