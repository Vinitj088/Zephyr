class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :provider
      t.string :uid
      t.string :email
      t.string :name
      t.string :avatar_url
      t.string :token
      t.string :refresh_token
      t.datetime :token_expires_at

      t.timestamps
    end

    add_index :users, [:provider, :uid], unique: true
    add_index :users, :email, unique: true
  end
end 