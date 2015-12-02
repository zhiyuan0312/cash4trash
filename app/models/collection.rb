class Collection < ActiveRecord::Base
	belongs_to :schedule
	belongs_to :user
	belongs_to :collector
end
