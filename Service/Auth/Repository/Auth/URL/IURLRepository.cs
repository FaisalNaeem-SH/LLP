using Auth.Model.Auth;
using Auth.Model;

namespace Auth.Repository.Auth.URL
{
    public interface IURLRepository
    {
        Task<bool> CreateURL(BaseServiceEntityModel<URLVM> baseServiceEntityModel);
        Task<List<URLVM>> GetAllURL(BaseServiceEntityModel<URLVM> baseServiceEntityModel);
        Task<URLVM> GetURLById(BaseServiceEntityModel<URLVM> baseServiceEntityModel);
        Task<URLVM> GetURLByURLName(BaseServiceEntityModel<URLVM> baseServiceEntityModel);
        Task<URLVM> GetURLByEmail(BaseServiceEntityModel<URLVM> baseServiceEntityModel);
        Task<bool> UpdateURLById(BaseServiceEntityModel<URLVM> baseServiceEntityModel);
        Task<bool> DeleteURLById(BaseServiceEntityModel<URLVM> baseServiceEntityModel);
    }
}
