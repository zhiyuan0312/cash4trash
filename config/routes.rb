Rails.application.routes.draw do

  resources :collections, only: [:new]

  get 'collections/show'

  get 'collections/:id/new', to: 'collections#new'

  get 'collections/index'

  post 'collections/create'

  get 'rewards_redemption/index'

  devise_for :collectors, controllers: {
    registrations: 'collectors/registrations'
  }

  resources :schedules, only: [:destroy, :edit, :update]

  get 'schedules', to: 'schedules#new'

  post 'schedules/create'



  get 'user/:id', to: 'users#show'

  get 'dashboard', to: 'users#index'

  get 'collectors_dashboard', to: 'collectors#index'

    # devise_for :users, controllers: { omniauth_callbacks: "callbacks" }

  devise_for :users, controllers: { sessions: "users/sessions", registrations: "users/registrations",omniauth_callbacks: "callbacks" }
  get 'home/index'

  root 'home#index'

end
