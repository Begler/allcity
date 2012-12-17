class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :description
      t.string :subject
      t.text :body
      t.boolean :release_on, default: false

      t.timestamps
    end
  end
end
