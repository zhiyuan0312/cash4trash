class CollectorsController < ApplicationController
  def show
  	@collector = Collector.find_by(params[:id])
  end

  def index
  	@collector = current_collector
  	@unpicked_schedules = Schedule.where(collector_id: nil)
  	@owned_schedules = Schedule.where(collector_id: current_collector.id)
  	@incomplete_jobs = []
  	@completed_jobs = []
  	@owned_schedules.each do |s|
  		if s.collection == nil
  			@incomplete_jobs << s
  		else 
  			@completed_jobs << s
  		end
  	end

  	byebug
  end
end
