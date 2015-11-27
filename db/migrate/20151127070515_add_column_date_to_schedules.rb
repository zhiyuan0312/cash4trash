class AddColumnDateToSchedules < ActiveRecord::Migration
  def change
  	add_column :schedules, :date, :date
  	add_column :schedules, :start_time, :time 
  	add_column :schedules, :end_time, :time
  	add_column :schedules, :collector_id, :integer
  end
end
