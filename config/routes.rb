Rails.application.routes.draw do
  devise_for :collectors, controllers: {
    registrations: 'collectors/registrations'
  }
  
  get 'user/:id', to: 'users#show'

  get 'dashboard', to: 'users#index'

  devise_for :users, controllers: { omniauth_callbacks: "callbacks" }
  get 'home/index'

  root 'home#index'
  
end
