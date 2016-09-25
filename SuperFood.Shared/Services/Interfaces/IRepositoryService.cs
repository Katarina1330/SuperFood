using System.Linq;

namespace SuperFood.Shared.Services.Interfaces
{
    public interface IRepositoryService
    {
        void Create<T>(T entity) where T : class;
        IQueryable<T> Read<T>() where T : class;
        void Updata<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
    }
}
