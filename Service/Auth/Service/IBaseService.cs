using Auth.Model;

namespace AuthService.Service
{
    public interface IBaseService <T>
    {
        Task<bool> CreateEntity(BaseServiceEntityModel<T> baseServiceEntityModel);
        Task<bool> DeleteEntityById(BaseServiceEntityModel<T> baseServiceEntityModel);
        Task<List<T>> GetAllEntities(BaseServiceEntityModel<T> baseServiceEntityModel);
        Task<T> GetEntityById(BaseServiceEntityModel<T> baseServiceEntityModel);
        Task<bool> UpdateEntityById(BaseServiceEntityModel<T> baseServiceEntityModel);
    }
}
