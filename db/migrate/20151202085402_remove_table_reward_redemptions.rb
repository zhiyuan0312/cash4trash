class RemoveTableRewardRedemptions < ActiveRecord::Migration
  def change
  	drop_table :reward_redemptions
  end
end
