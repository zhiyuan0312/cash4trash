class UsersController < ApplicationController
  def show
  	@user = User.find_by(params[:id])
  end

  def index
  	@user = current_user
  	@total = {newspaper: 0, magazine: 0, cardboard: 0, plastic: 0, tinmetal: 0, aluminium: 0}
  	@user.collections.each do |collection|
  		@total[:newspaper] += collection.newspaper
  		@total[:magazine] += collection.magazine
  		@total[:cardboard] += collection.cardboard
  		@total[:plastic] += collection.plastic
  		@total[:tinmetal] += collection.tinmetal 
  		@total[:aluminium] += collection.aluminium 
  	end
  end
end
