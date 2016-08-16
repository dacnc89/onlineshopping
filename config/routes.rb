Rails.application.routes.draw do
  resources :orders
  resources :line_items
  resources :carts
  get 'store/about'

  get 'store/faqs'

  get 'store/contact'

  get 'store/index'

  resources :products
  devise_for :users
  
  root 'store#index'#, as: 'store'
end
