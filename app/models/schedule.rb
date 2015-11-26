class Schedule < ActiveRecord::Base
	belongs_to :user

	Amount = ['A few', 'A lot', 'Truck load!']
end
