class Area < ActiveRecord::Base
  belongs_to :sector

  def as_json(options = {})
    super(options.merge(include: :sector))
  end

end
