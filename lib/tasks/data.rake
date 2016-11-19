namespace :data do
  # desc "TODO"
  # task create_categories: :environment do
  #   Category.create(:name => "Category 1")
  # end

  desc "TODO"
  task create_donam: :environment do
    
    (1..15).each do |num|
      Product.create(
        :category_id => 1,
        :title => "Female #{num}",
        :price => 4*num,
        :description => "This is Product for Female #{num}",
        :image => File.open("/home/comp/Pictures/#{num}.jpg"))
    end
  end
  

end
