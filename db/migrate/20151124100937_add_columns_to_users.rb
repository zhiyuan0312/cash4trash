class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :provider, :string
    add_column :users, :uid, :string
    add_column :users, :facebook_profile_picture, :string
    add_column :users, :facebook_auth_token, :string
  end
end
