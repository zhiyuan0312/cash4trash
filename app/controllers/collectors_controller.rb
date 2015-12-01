class CollectorsController < ApplicationController
  def show
  	@collector = Collector.find_by(params[:id])
  end

  def index
  	@collector = current_collector
  	@unpicked_schedules = Schedule.where(collector_id: nil).order(:date)
  	@owned_schedules = Schedule.where(collector_id: current_collector.id).order(:date)
    @incomplete_jobs = []
    @completed_jobs = []

    	@owned_schedules.each do |s|
    		if s.collection.confirmation_key == nil
    			@incomplete_jobs << s
    		else 
    			@completed_jobs << s
    		end
    	end
    end

end
