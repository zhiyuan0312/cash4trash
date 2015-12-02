class AddColumnUserToCollection < ActiveRecord::Migration
  def change
  	add_reference :collections, :user
  	add_reference :collections, :collector
  end
end
