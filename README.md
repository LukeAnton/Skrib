# Skrib
## Project 1 GA - Skrib / An interactive platform for uploading and sharing Web Animation Designs

[Link to live site](https://sskribb.herokuapp.com/)

### Initial Page
<img width="1435" alt="Screen Shot 2019-04-26 at 8 47 22 am" src="https://user-images.githubusercontent.com/43797015/56773623-506c2a00-6802-11e9-97c8-e584dca393a9.png">

### Login
<img width="1438" alt="Screen Shot 2019-04-26 at 9 58 56 am" src="https://user-images.githubusercontent.com/43797015/56775388-36cee080-680a-11e9-8194-23056041119c.png">

### Main Shots Feed
<img width="1437" alt="Screen Shot 2019-04-26 at 8 48 11 am" src="https://user-images.githubusercontent.com/43797015/56773625-506c2a00-6802-11e9-8080-8b09073a528d.png">

### Upload Shot
<img width="1436" alt="Screen Shot 2019-04-26 at 8 48 27 am" src="https://user-images.githubusercontent.com/43797015/56773624-506c2a00-6802-11e9-882f-213f2b4c89c6.png">

### Show Shot Page
<img width="1440" alt="Screen Shot 2019-04-26 at 10 10 49 am" src="https://user-images.githubusercontent.com/43797015/56775692-9b3e6f80-680b-11e9-95bb-fb91eba7fec8.png">

### Edit User Page
<img width="1438" alt="Screen Shot 2019-04-26 at 8 48 41 am" src="https://user-images.githubusercontent.com/43797015/56773626-5104c080-6802-11e9-9f1e-93da68237662.png">

## Schema
<img width="652" alt="Screen Shot 2019-04-26 at 10 55 10 am" src="https://user-images.githubusercontent.com/43797015/56776879-f2474300-6811-11e9-960d-bf68ddf28075.png">

## Routes
<img width="747" alt="Screen Shot 2019-04-26 at 11 08 19 am" src="https://user-images.githubusercontent.com/43797015/56777220-a3021200-6813-11e9-96fb-f0fc0eece661.png">
<img width="692" alt="Screen Shot 2019-04-26 at 11 07 24 am" src="https://user-images.githubusercontent.com/43797015/56777228-a85f5c80-6813-11e9-84f9-87abb3a915da.png">
<img width="892" alt="Screen Shot 2019-04-26 at 11 07 33 am" src="https://user-images.githubusercontent.com/43797015/56777232-ac8b7a00-6813-11e9-9881-88a7115b37ea.png">


### Sore bits
Initially following a tutorial to build on top of made hard to scale, because much of the code was not mine.
I had trouble working with devise to create a seperate user shots dashboard, sooooo I abandon the original project to start from scratch... then jumped back to the original code and ran out of time.  So if you do follow a tutorial to begin with..... stick with it and understand it!!

## Cool Beans
### Devise
Even though devise road blocked me, It was great for setting up users as it creates a migration file with a bunch of optional features to add to the user table
class DeviseCreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string   :current_sign_in_ip
      t.string   :last_sign_in_ip

      ## Confirmable
      # t.string   :confirmation_token
      # t.datetime :confirmed_at
      # t.datetime :confirmation_sent_at
      # t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at


      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
    # add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,         unique: true
  end
end

### Bulma
Bulma is similar to bootstrap, made it easy to get style up and running.
Downfall -- a little tricky to find hidden styles.. To solve this, open up dev tools and inspect the living daylights out of whatever you'r trying to change and simply over ride it in your stylesheet.

### Where next?
I want to add features to the upload page so users can upload code and play with animations, and simplifying allot of the code.

### What I learned
A bigger grasp on everything we learned over the last 2 weeks.
