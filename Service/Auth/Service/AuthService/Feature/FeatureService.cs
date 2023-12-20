using Auth.Model;
using Auth.Model.Auth;
using AuthService.Service;

namespace Auth.Service.AuthService.Feature
{
    public class FeatureService : IFeatureService
    {
        Task<bool> IBaseService<FeatureVM>.CreateEntity(BaseServiceEntityModel<FeatureVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IBaseService<FeatureVM>.DeleteEntityById(BaseServiceEntityModel<FeatureVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<List<FeatureVM>> IBaseService<FeatureVM>.GetAllEntities(BaseServiceEntityModel<FeatureVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<FeatureVM> IBaseService<FeatureVM>.GetEntityById(BaseServiceEntityModel<FeatureVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IBaseService<FeatureVM>.UpdateEntityById(BaseServiceEntityModel<FeatureVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }
    }
}
