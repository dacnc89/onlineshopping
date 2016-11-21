class Product < ActiveRecord::Base
  has_many :line_items
  has_many :orders, through: :line_items
  belongs_to :category
  before_destroy :ensure_no_referenced_by_any_line_item

  validates :title, :description, presence: true
  validates :price, numericality: {greater_than_or_equal_to: 0.01}
  validates :title, uniqueness: true
 
  has_attached_file :image, :styles => {medium: "150px", thumb: "180x180"}, default_url: "1.jpg"
  validates_attachment_content_type :image, content_type: %w(image/jpeg image/jpg image/png)


  searchable do 
    text :title, :description
  end
  # self.per_page = 16
  # paginates_per 16

  private
    def ensure_no_referenced_by_any_line_item
      if line_items.empty?
        return true
      else
        errors.add(:base, 'Line Items present')
        return false
      end
    end
end
