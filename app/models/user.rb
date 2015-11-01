class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  belongs_to :role
  belongs_to :job
  belongs_to :area

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
