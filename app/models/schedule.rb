class Schedule < ActiveRecord::Base
	belongs_to :user
	belongs_to :collector

	Amount = ['A box full', 'A bin full', 'A Truck load!']

end
