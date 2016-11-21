Rails.application.routes.draw do
  
  get 'admin/index'

  devise_for :admins
  resources :categories
  resources :orders
  resources :line_items
  resources :carts
  get 'store/about'

  get 'store/faqs'

  get 'store/contact'

  get 'store/index'

  resources :products do
    get :who_bought, on: :member
  end
  devise_for :users
  
  root 'store#index'#, as: 'store'
end
