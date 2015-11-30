class CollectionsController < ApplicationController
  def show
  end

  def new
  	@collection = Collection.new
  end

  def index
  end

  def create
  	@collection = Collection.new(collection_params)
  	byebug
  	if @collection.schedule.confirmation_key == params[:collection][:confirmation_key]
  		@collection.save
  		redirect_to '/collectors_dashboard'
  		flash[:notice] = 'Collection succesful'
  	else
  		flash[:alert] = 'Someting went wrong'
  		render '/collections/new'
  	end
  end

  private
  def collection_params
  	params.require(:collection).permit(:newspaper, :magazine, :cardboard, :plastic, :tinmetal, :aluminium, :confirmation_key)
  end
end
