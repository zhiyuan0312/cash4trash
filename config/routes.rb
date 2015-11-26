Rails.application.routes.draw do

  get 'schedules/new'

  post 'schedules/create'

  get 'user/:id', to: 'users#show'

  get 'dashboard', to: 'users#index'

    # devise_for :users, controllers: { omniauth_callbacks: "callbacks" }

  devise_for :users, controllers: { sessions: "users/sessions", registrations: "users/registrations",omniauth_callbacks: "callbacks" }
  get 'home/index'

  root 'home#index'

end
