class Area < ActiveRecord::Base
  
  belongs_to :sector
  has_many :users

  def as_json(options = {})
    super(options.merge(include: :sector))
  end

end
