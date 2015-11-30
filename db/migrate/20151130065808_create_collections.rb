class CreateCollections < ActiveRecord::Migration
  def change
    create_table :collections do |t|
      t.integer :newspaper
      t.integer :magazine
      t.integer :cardboard
      t.integer :plastic
      t.integer :tinmetal
      t.integer :aluminium
      t.belongs_to :schedule, index: true

      t.timestamps null: false
    end
  end
end
