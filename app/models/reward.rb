class Reward < ActiveRecord::Base
	belongs_to :user

	validates :choice, :user, presence: true
end
