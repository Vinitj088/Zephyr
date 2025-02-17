Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"

  # Auth routes
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/auth/failure', to: 'sessions#failure'
  delete '/logout', to: 'sessions#destroy'
  
  # Add this line to handle the initial OAuth request
  get '/auth/google_oauth2', as: :google_oauth2
  
  # API routes
  namespace :api do
    namespace :v1 do
      get 'status', to: 'status#show'
    end
  end

  # Protected routes
  constraints lambda { |req| req.session[:user_id].present? } do
    get 'dashboard', to: 'dashboard#index'
  end

  # Public routes
  root 'home#index'
  get '/login', to: 'home#login'
  
  # Catch-all route should be last
  get '*path', to: 'application#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
