class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.float :price
      t.references :project_status, index: true, foreign_key: true
      t.string :link

      t.timestamps null: false
    end
  end
end
