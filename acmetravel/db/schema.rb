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

ActiveRecord::Schema.define(version: 20170202131650) do

  create_table "examples", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string   "name"
    t.integer  "cc"
    t.boolean  "active"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_examples_on_user_id", using: :btree
  end

  create_table "expenses", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.float    "amount",     limit: 24
    t.integer  "travel_id"
    t.datetime "created_at",            default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "updated_at",            default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.index ["travel_id"], name: "index_expenses_on_travel_id", using: :btree
  end

  create_table "roles", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string   "name"
    t.datetime "created_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "updated_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
  end

  create_table "tags", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string   "text"
    t.datetime "created_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "updated_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
  end

  create_table "tags_expenses", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.integer  "expense_id"
    t.integer  "tag_id"
    t.datetime "created_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "updated_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.index ["expense_id"], name: "index_tags_expenses_on_expense_id", using: :btree
    t.index ["tag_id"], name: "index_tags_expenses_on_tag_id", using: :btree
  end

  create_table "travels", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string   "description"
    t.boolean  "finalized",   default: false
    t.integer  "user_id"
    t.datetime "created_at",  default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "updated_at",  default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.index ["user_id"], name: "index_travels_on_user_id", using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string   "names"
    t.string   "surnames"
    t.string   "cc"
    t.integer  "role_id"
    t.datetime "created_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.datetime "updated_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.string   "email"
    t.string   "password"
    t.index ["role_id"], name: "index_users_on_role_id", using: :btree
  end

  add_foreign_key "examples", "users"
  add_foreign_key "expenses", "travels"
  add_foreign_key "tags_expenses", "expenses"
  add_foreign_key "tags_expenses", "tags"
  add_foreign_key "travels", "users"
  add_foreign_key "users", "roles"
end
