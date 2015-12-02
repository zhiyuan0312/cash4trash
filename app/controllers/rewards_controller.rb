class RewardsController < ApplicationController
  def new

  end

  def create
  	reward = Reward.new(reward_params)
  	reward.user = current_user
  	if current_user.points >= 100
  		current_user.points -= 100 	
  		current_user.save
  		reward.save
  	end

  	flash[:notice] = "Successfully claimed your rewards!"
  	redirect_to dashboard_path
  end

  private
  def reward_params
    params.require(:reward).permit(:choice)
  end
end
