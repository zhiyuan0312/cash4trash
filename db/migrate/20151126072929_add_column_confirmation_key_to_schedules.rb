class AddColumnConfirmationKeyToSchedules < ActiveRecord::Migration
  def change
    add_column :schedules, :confirmation_key, :string
  end
end
