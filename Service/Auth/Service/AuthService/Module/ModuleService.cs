using Auth.Model;
using Auth.Model.Auth;
using AuthService.Service;

namespace Auth.Service.AuthService.Module
{
    public class ModuleService : IModuleService
    {
        Task<bool> IBaseService<ModuleVM>.CreateEntity(BaseServiceEntityModel<ModuleVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IBaseService<ModuleVM>.DeleteEntityById(BaseServiceEntityModel<ModuleVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<List<ModuleVM>> IBaseService<ModuleVM>.GetAllEntities(BaseServiceEntityModel<ModuleVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<ModuleVM> IBaseService<ModuleVM>.GetEntityById(BaseServiceEntityModel<ModuleVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IBaseService<ModuleVM>.UpdateEntityById(BaseServiceEntityModel<ModuleVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }
    }
}
