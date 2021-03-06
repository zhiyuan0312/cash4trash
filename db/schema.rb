# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151202113752) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collections", force: :cascade do |t|
    t.integer  "newspaper"
    t.integer  "magazine"
    t.integer  "cardboard"
    t.integer  "plastic"
    t.integer  "tinmetal"
    t.integer  "aluminium"
    t.integer  "schedule_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "confirmation_key"
    t.integer  "user_id"
    t.integer  "collector_id"
  end

  add_index "collections", ["schedule_id"], name: "index_collections_on_schedule_id", using: :btree

  create_table "collectors", force: :cascade do |t|
    t.string   "full_name"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "collectors", ["email"], name: "index_collectors_on_email", unique: true, using: :btree
  add_index "collectors", ["reset_password_token"], name: "index_collectors_on_reset_password_token", unique: true, using: :btree

  create_table "rewards", force: :cascade do |t|
    t.integer "user_id"
    t.string  "choice"
  end

  create_table "schedules", force: :cascade do |t|
    t.string   "amount"
    t.integer  "user_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "confirmation_key"
    t.date     "date"
    t.integer  "collector_id"
    t.datetime "start_time"
    t.datetime "end_time"
  end

  add_index "schedules", ["user_id"], name: "index_schedules_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                    default: "", null: false
    t.string   "encrypted_password",       default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",            default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.string   "full_name"
    t.string   "provider"
    t.string   "uid"
    t.string   "facebook_profile_picture"
    t.string   "facebook_auth_token"
    t.integer  "points",                   default: 0
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
