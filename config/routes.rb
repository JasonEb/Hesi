Rails.application.routes.draw do
  mount Attachinary::Engine => "/attachinary"
  
  root 'root#root'
  
  resources :users
  resource :session
  
  namespace :api, defaults: { format: :json} do
    resources :images, only: [:show, :index]
  end
end
