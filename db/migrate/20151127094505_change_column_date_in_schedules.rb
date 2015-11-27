class ChangeColumnDateInSchedules < ActiveRecord::Migration
  def change
  	remove_column :schedules, :start_time
  	remove_column :schedules, :end_time
  	add_column :schedules, :start_time, :datetime
  	add_column :schedules, :end_time, :datetime
  end
end
