class CollectionsController < ApplicationController
  def show
  end

  def new
  	@collection = Collection.new
    @schedule = Schedule.find(params[:id])
  end

  def index
  end

  def create
  	@collection = Collection.new(collection_params)
  	if @collection.schedule.confirmation_key == params[:collection][:confirmation_key]
  		@collection.save
      @collection.schedule.collector_id = current_collector.id
      byebug
  		redirect_to '/collectors_dashboard'
  		flash[:notice] = 'Collection succesful'
  	else
  		flash[:alert] = 'Someting went wrong'
  		render '/collections/new'
  	end
  end

  private
  def collection_params
  	params.require(:collection).permit(:newspaper, :magazine, :cardboard, :plastic, :tinmetal, :aluminium, :confirmation_key, :schedule_id)
  end
end
