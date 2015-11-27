class RemoveColumnDateFromSchedules < ActiveRecord::Migration
  def change
  	remove_column :schedules, :start_date
  	remove_column :schedules, :end_date
  end
end
