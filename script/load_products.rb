Product.transaction do  
  (1..25).each do |i|
    Product.create(title: "Product #{i}", description: "This is Product#{i}", price: 55*i, image_url: "#{i}.jpg")
  end
end