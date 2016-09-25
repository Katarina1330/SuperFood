using SuperFood.Shared.Data.Implementations;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace SuperFood.Shared.Data.Interfaces
{
    public interface ISuperFoodEntities
    {
        DbSet<Order> Orders { get; set; }
        DbSet<Product> Products { get; set; }
        DbSet<ProductType> ProductTypes { get; set; }
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
        int SaveChanges();
    }
}
