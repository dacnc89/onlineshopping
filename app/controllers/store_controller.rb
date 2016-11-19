class StoreController < ApplicationController
  def index
    @products = Product.order(:title)
    @product_sell = Product.order(created_at: :desc).limit(2)
  end
end
