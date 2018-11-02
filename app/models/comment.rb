class Comment < ApplicationRecord
  belongs_to :card
  # has_many :cards
  validates_presence_of :text, allow_blank: false
end
