using Auth.Model;
using Auth.Model.Auth;
using AuthService.Service;

namespace Auth.Service.AuthService.Settings
{
    public class SettingsService : ISettingsService
    {
        Task<bool> IBaseService<SettingsVM>.CreateEntity(BaseServiceEntityModel<SettingsVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IBaseService<SettingsVM>.DeleteEntityById(BaseServiceEntityModel<SettingsVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<List<SettingsVM>> IBaseService<SettingsVM>.GetAllEntities(BaseServiceEntityModel<SettingsVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<SettingsVM> IBaseService<SettingsVM>.GetEntityById(BaseServiceEntityModel<SettingsVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IBaseService<SettingsVM>.UpdateEntityById(BaseServiceEntityModel<SettingsVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }
    }
}
