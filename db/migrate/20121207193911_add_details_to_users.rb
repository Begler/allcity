class AddDetailsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :username, :string
    add_column :users, :name, :string
    add_column :users, :surname, :string
    add_column :users, :born_on, :date
    add_column :users, :female, :boolean
  end
end
