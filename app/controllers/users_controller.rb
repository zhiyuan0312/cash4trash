class UsersController < ApplicationController
  def show
  	@user = User.find_by(params[:id])
  end

  def index
  	@user = current_user
  end
end
