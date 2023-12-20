using Auth.Model;
using Auth.Model.Auth;

namespace Auth.Repository.Auth.URL
{
    public class URLRepository : IURLRepository
    {
        Task<bool> IURLRepository.CreateURL(BaseServiceEntityModel<URLVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IURLRepository.DeleteURLById(BaseServiceEntityModel<URLVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<List<URLVM>> IURLRepository.GetAllURL(BaseServiceEntityModel<URLVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<URLVM> IURLRepository.GetURLByEmail(BaseServiceEntityModel<URLVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<URLVM> IURLRepository.GetURLById(BaseServiceEntityModel<URLVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<URLVM> IURLRepository.GetURLByURLName(BaseServiceEntityModel<URLVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IURLRepository.UpdateURLById(BaseServiceEntityModel<URLVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }
    }
}
