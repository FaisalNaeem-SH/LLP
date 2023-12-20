using Auth.Model;
using Auth.Model.Auth;
using Auth.Repository.Auth.URL;


namespace AuthService.Service.Auth.URL
{
    public class URLService : IURLService
    {
        public IURLRepository _urlRepository;

        public URLService(IURLRepository uRLRepository)
        {
            _urlRepository = uRLRepository;
        }

        Task<bool> IBaseService<URLVM>.CreateEntity(BaseServiceEntityModel<URLVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IBaseService<URLVM>.DeleteEntityById(BaseServiceEntityModel<URLVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<List<URLVM>> IBaseService<URLVM>.GetAllEntities(BaseServiceEntityModel<URLVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<URLVM> IBaseService<URLVM>.GetEntityById(BaseServiceEntityModel<URLVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IBaseService<URLVM>.UpdateEntityById(BaseServiceEntityModel<URLVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }
    }
}
