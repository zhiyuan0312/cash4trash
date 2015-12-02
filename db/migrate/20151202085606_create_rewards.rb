class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
    	t.belongs_to :user
    	t.string :choice
    end
  end
end
