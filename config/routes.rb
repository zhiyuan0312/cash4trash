Rails.application.routes.draw do
  get 'schedules/new'

  post 'schedules/create'

  devise_for :users, controllers: { omniauth_callbacks: "callbacks" }
  get 'home/index'

  root 'home#index'
  
end
