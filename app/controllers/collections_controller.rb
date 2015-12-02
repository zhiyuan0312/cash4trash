class CollectionsController < ApplicationController

  def create
  	@collection = Collection.new
    @collection.schedule_id = params[:collection][:schedule_id]
    @collection.save
    @collection.schedule.collector_id = current_collector.id
    @collection.schedule.save
    flash[:notice] = "Booked the job!"
    redirect_to collectors_dashboard_path
  end


  def edit
    if params[:collection][:schedule_id] == nil
      redirect_to collectors_dashboard_path
    else
    @schedule = Schedule.find(params[:collection][:schedule_id])
    @collection = @schedule.collection
    end
  end

  def update
    @schedule = Schedule.find(params[:collection][:schedule_id])
  	@collection = @schedule.collection
    @received_points = 0
    #points multiplier
    @newspaper = 2
    @magazine = 2
    @cardboard = 2
    @plastic = 1
    @tinmetal = 2
    @aluminium = 25

    @collection.assign_attributes(collection_params)
  	if @collection.schedule.confirmation_key == params[:collection][:confirmation_key]
  		@collection.save
      #add points to user
      @received_points = ((@collection.newspaper * @newspaper) + (@collection.magazine * @magazine) + (@collection.cardboard * @cardboard) + (@collection.plastic * @plastic) + (@collection.tinmetal * @tinmetal) + (@collection.aluminium * @aluminium))
      @collection.schedule.user.points += @received_points
      @collection.schedule.user.save
  		redirect_to '/collectors_dashboard'
  		flash[:notice] = 'Collection succesful!'
  	else
  		flash[:alert] = 'Incorrect confirmation key'
  		render '/collections/edit'
  	end
  end

  private
  def collection_params
  	params.require(:collection).permit(:newspaper, :magazine, :cardboard, :plastic, :tinmetal, :aluminium, :confirmation_key, :schedule_id)
  end
end
