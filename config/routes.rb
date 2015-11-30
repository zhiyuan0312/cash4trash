Rails.application.routes.draw do

  get 'collections/show'

  get 'collections/new'

  get 'collections/index'

  post 'collections/create'

  get 'rewards_redemption/index'

  devise_for :collectors, controllers: {
    registrations: 'collectors/registrations'
  }

  get 'schedules/new'

  post 'schedules/create'

  get 'user/:id', to: 'users#show'

  get 'dashboard', to: 'users#index'

  get 'collectors_dashboard', to: 'collectors#index'

    # devise_for :users, controllers: { omniauth_callbacks: "callbacks" }

  devise_for :users, controllers: { sessions: "users/sessions", registrations: "users/registrations",omniauth_callbacks: "callbacks" }
  get 'home/index'

  root 'home#index'

end
