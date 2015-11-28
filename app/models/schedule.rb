class Schedule < ActiveRecord::Base
	belongs_to :user

	Amount = ['A box full', 'A bin full', 'A Truck load!']

end
