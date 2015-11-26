class CreateSchedules < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
    	t.datetime :start_date
    	t.datetime :end_date
    	t.string :amount
    	t.belongs_to :user, index: true

      t.timestamps null: false
    end
  end
end
