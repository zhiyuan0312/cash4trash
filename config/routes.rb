Rails.application.routes.draw do


  get 'collections/show'

  post 'collections/create', to: 'collections#create', as: 'new_collection'

  get 'collections/pickup', to: 'collections#edit'
  post 'collections/pickup', to: 'collections#update'

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
