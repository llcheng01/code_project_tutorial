# encoding: UTF-8
require 'json'
require 'sinatra'
require 'data_mapper'
require 'dm-migrations'
require 'haml'

configure :development do
    DataMapper::Logger.new($stdout, :debug)

    DataMapper.setup(:default, ENV['DATABASE_URL'] || "sqlite3://#{Dir.pwd}/mydb.db")
    # DataMapper.setup(
    #     :default,
    #     'mysql:://root:12345@localhost/sinatra_service'
    # 
end


configure :production do
    DataMapper.setup(:default, ENV['DATABASE_URL'] || "sqlite3://#{Dir.pwd}/mydb.db")
    # DataMapper.setup(
    #     :default,
    #     'postgres:://postgres:12345@localhost/sinatra_service'
    # )
end

require './models/init'
require './helpers/init'
require './routes/init'

DataMapper.finalize
