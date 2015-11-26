class SchedulesController < ApplicationController
  def new
  	@schedule = Schedule.new
  end

  def create
  	@schedule = Schedule.new(schedule_params)
    @schedule.save
    byebug
    redirect_to '/'
  end

  private
  def schedule_params
    params.require(:schedule).permit(:start_date, :end_date, :user_id, :amount)
  end
end
