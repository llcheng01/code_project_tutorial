# encoding: UTF-8
require 'json'
require 'sinatra'
require 'data_mapper'
require 'dm-migrations'
require 'haml'
require 'sinatra/assetpack'


configure :development do
    DataMapper::Logger.new($stdout, :debug)

    DataMapper.setup(:default, ENV['DATABASE_URL'] || "sqlite3://#{Dir.pwd}/mydb.db")
    # DataMapper.setup(
    #     :default,
    #     'mysql:://root:12345@localhost/sinatra_service'
    # 
    enable :logging
    set :public_folder, 'public/app'
    set :root, File.dirname(__FILE__)
end


configure :production do
    DataMapper.setup(:default, ENV['DATABASE_URL'] || "sqlite3://#{Dir.pwd}/mydb.db")
    # DataMapper.setup(
    #     :default,
    #     'postgres:://postgres:12345@localhost/sinatra_service'
    # )
end

assets do
    serve '/js', from: 'public/app/scripts'
    serve '/bower_components', from: 'public/bower_components'
    serve '/styles', from: 'public/.tmp/styles'
    serve '/images', from: 'public/app/images'

    js :libs, [
        '/bower_components/jquery/dist/jquery.min.js',
        '/bower_components/angular/dist/angular.min.js',
        '/bower_components/angular-route/dist/angular-route.min.js',
        '/bower_components/angular-resource/dist/angular-resource.min.js',
        '/bower_components/angular-cookies/dist/angular-cookies.min.js'
    ]

    js :application, [
        '/js/app.js',
        '/js/controllers/main.js',
        '/js/controllers/about.js'
    ]

    css :application, [
        '/css/main.css'
    ]

end

require './models/init'
require './helpers/init'
require './routes/init'

DataMapper.finalize
