namespace SuperFood.Models
{
    public class ProductViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string[] Details { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public bool InStock { get; set; }
        public bool IsDeleted { get; set; }
        public ProductTypeViewModel ProductType { get; set; }
    }
}