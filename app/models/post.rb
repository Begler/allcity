# encoding: utf-8
# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  description :string(255)
#  subject     :string(255)
#  body        :text
#  release_on  :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Post < ActiveRecord::Base
  attr_accessible :body, :description, :release_on, :subject

  validates :description, presence: true
  validates_length_of :description, within: 10..100

  validates :body, presence: true
end
