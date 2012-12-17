# encoding: utf-8
# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0)
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  confirmation_token     :string(255)
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string(255)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  username               :string(255)
#  name                   :string(255)
#  surname                :string(255)
#  born_on                :date
#  female                 :boolean
#

class User < ActiveRecord::Base
  rolify
  # Include default devise modules. Others available are:
  # :token_authenticatable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable, :omniauthable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me,
                  :username, :name, :surname, :born_on, :female

   # Setup accessible (or protected) attributes for your model
  attr_accessible :role_ids, as: :admin
  attr_accessible :role_ids, as: :user

  validates :username, presence: true
  validates_length_of :username, within: 3..20
  validates_format_of :username, with: /^[A-Za-z\d_]+$/, message: "могут быть буквы и цифры, без пробелов"

  validates_length_of :name, within: 3..20
  validates_format_of :name, with: /^[^0-9`!@#\$%\^&*+_=]+$/, message: "могут быть только буквы"

  validates_length_of :surname, within: 3..20
  validates_format_of :surname, with: /^[^0-9`!@#\$%\^&*+_=]+$/, message: "могут быть только буквы"
end
