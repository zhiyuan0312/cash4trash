class SchedulesController < ApplicationController
  def new
  	@schedule = Schedule.new
  end

  def create
   
  	@schedule = Schedule.new(schedule_params)
    @schedule.confirmation_key = SecureRandom.hex(3)
    if @schedule.save
    redirect_to '/'
    else
      flash[:alert] = 'Something is wrong'
    end
  end

  private
  def schedule_params
    params.require(:schedule).permit(:start_date, :end_date, :user_id, :amount, :confirmation_key)
  end
end
