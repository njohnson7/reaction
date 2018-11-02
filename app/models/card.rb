class Card < ApplicationRecord
  belongs_to :board
  belongs_to :list
  has_many :comments
  validates_presence_of :title, allow_blank: false
end
