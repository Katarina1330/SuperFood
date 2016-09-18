using SuperFood.Shared.Data.Implementations;
using System.Data.Entity;

namespace SuperFood.Shared.Data.Interfaces
{
    public interface ISuperFoodEntities
    {
         DbSet<Order> Orders { get; set; }
         DbSet<Product> Products { get; set; }
         DbSet<ProductType> ProductTypes { get; set; }
    }
}
