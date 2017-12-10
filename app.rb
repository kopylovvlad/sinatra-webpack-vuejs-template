require 'bundler'
require 'sinatra'
require 'sinatra/json'
require 'sinatra/namespace'
require 'sinatra/base'
require 'sinatra/reloader'
require 'sequel'
require 'sqlite3'
require 'json'
Bundler.require
set :erb, escape_html: true

##
# prepare
DB = Sequel.sqlite
DB.create_table :items do
  primary_key :id
  String :title
end
items = DB[:items]
[
  { id: '1', title: 'First item' },
  { id: '2', title: 'Second item' },
  { id: '3', title: 'Third item' },
  { id: '4', title: 'Fourth item' },
  { id: '5', title: 'Fifth item' }
].each { |item| items.insert(:title => item[:title]) }

##
# app
class App < Sinatra::Base
  register Sinatra::Namespace
  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    File.read(File.join('public', 'index.html'))
  end

  namespace '/api/items' do
    get '' do
      json items: DB[:items].all
    end

    post '' do
      request.body.rewind
      param = JSON.parse(request.body.read)
      title = param['title'] || ''
      DB[:items].insert(:title => title)
      json success: true
    end

    get '/:id' do
      json item: DB[:items].where(:id => params['id']).first
    end

    delete '/:id' do
      DB[:items].filter(:id => params['id']).delete
      json success: true
    end
  end

  not_found do
    File.read(File.join('public', 'index.html'))
  end
end
