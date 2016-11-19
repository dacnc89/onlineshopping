class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.belongs_to :category, index: true, foreign_key: true
      t.string :title
      t.text :description
      t.decimal :price, precision: 8, scale: 2

      t.timestamps null: false
    end
  end
end
