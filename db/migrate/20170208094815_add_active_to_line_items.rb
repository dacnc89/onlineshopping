class AddActiveToLineItems < ActiveRecord::Migration
  def change
    add_column :line_items, :active, :boolean, default: true
  end
end
