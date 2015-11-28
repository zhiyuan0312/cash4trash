class SchedulesController < ApplicationController
  def new
  	@schedule = Schedule.new
  end

  def create

    date = Date.parse(params[:schedule][:date])

    start_time_params = params[:schedule][:date] + " " + params[:schedule][:start_time]
    start_time = Time.parse(start_time_params)

    end_time_params = params[:schedule][:date] + " " + params[:schedule][:end_time]
    end_time = Time.parse(start_time_params)

    @schedule = Schedule.new
    @schedule.user_id = current_user.id
    @schedule.date = date
    @schedule.amount = params[:schedule][:amount]
    @schedule.start_time = start_time
    @schedule.end_time = end_time
    @schedule.confirmation_key = SecureRandom.hex(3)

    if @schedule.save
    redirect_to '/dashboard'
      flash[:notice] = 'Successfully scheduled a pickup!'
    else
      flash[:alert] = 'Something is wrong'
    end
  end

  private
  def schedule_params
    params.require(:schedule).permit(:date, :start_time, :end_time, :user_id, :collector_id, :amount, :confirmation_key)
  end
end
