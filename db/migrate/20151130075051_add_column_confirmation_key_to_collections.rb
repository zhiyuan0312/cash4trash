class AddColumnConfirmationKeyToCollections < ActiveRecord::Migration
  def change
    add_column :collections, :confirmation_key, :string
  end
end
