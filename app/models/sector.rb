class Sector < ActiveRecord::Base
	has_many :areas, dependent: :destroy

	accepts_nested_attributes_for :areas

	def as_json(options = {})
    	super(options.merge(include: :areas))
  	end

end
