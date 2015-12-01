class CollectorsController < ApplicationController
  def show
  	@collector = Collector.find_by(params[:id])
  end

  def index
  	@collector = current_collector
  	@existing_schedules = Schedule.where(:collector_id == nil)
  end
end
