# encoding: UTF-8
get '/' do
    # haml :index
    erb :index
end

get '/static' do
    erb :static
end

post '/static' do
  body = JSON.parse request.body.read
  comment = {text: body['text']}
  status 201
  format_response(comment, request.accept)
end

get '/partials/:name' do
    erb params[:name].to_sym, layout: false
end

get '/example.json' do
    content_type :json
    {:key1 => 'value1', :key2 => 'value2'}.to_json
end


get '/api/movies' do
  format_response(Movie.all, request.accept)
end

get '/api/movies/:id' do
  movie ||= Movie.get(params[:id]) || halt(404)
  format_response(movie, request.accept)
end

post '/api/movies' do
  body = JSON.parse request.body.read
  movie = Movie.create(
    title:    body['title'],
    director: body['director'],
    synopsis: body['synopsis'],
    year:     body['year']
  )
  status 201
  format_response(movie, request.accept)
end

put '/api/movies/:id' do
  body = JSON.parse request.body.read
  movie ||= Movie.get(params[:id]) || halt(404)
  halt 500 unless movie.update(
    title:    body['title'],
    director: body['director'],
    synopsis: body['synopsis'],
    year:     body['year']
  )
  format_response(movie, request.accept)
end

delete '/api/movies/:id' do
  movie ||= Movie.get(params[:id]) || halt(404)
  halt 500 unless movie.destroy
end
