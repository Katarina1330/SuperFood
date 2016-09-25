using SuperFood.Shared.Data.Implementations;
using SuperFood.Shared.Data.Interfaces;
using SuperFood.Shared.Services.Interfaces;
using System.Data.Entity;
using System.Linq;

namespace SuperFood.Shared.Services.Implementations
{
    public class RepositoryService : IRepositoryService
    {
        private readonly ISuperFoodEntities _context;

        public RepositoryService(ISuperFoodEntities context)
        {
            _context = context;
        }

        public void Create<T>(T entity) where T : class
        {
            _context.Set<T>().Add(entity);
            _context.SaveChanges();
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Set<T>().Attach(entity);
            _context.Set<T>().Remove(entity);
            _context.SaveChanges();
        }

        public IQueryable<T> Read<T>() where T : class
        {
            return _context.Set<T>();
        }

        public void Updata<T>(T entity) where T : class
        {
            _context.Set<T>().Attach(entity);
            _context.Entry<T>(entity).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}
