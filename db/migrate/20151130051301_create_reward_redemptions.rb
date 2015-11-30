class CreateRewardRedemptions < ActiveRecord::Migration
  def change
    create_table :reward_redemptions do |t|

      t.timestamps null: false
    end
  end
end
