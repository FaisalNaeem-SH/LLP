using Auth.Model;
using Auth.Model.Auth;
using AuthService.Service;

namespace Auth.Service.AuthService.Role
{
    public class RoleService : IRoleService
    {
        Task<bool> IBaseService<RoleVM>.CreateEntity(BaseServiceEntityModel<RoleVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IBaseService<RoleVM>.DeleteEntityById(BaseServiceEntityModel<RoleVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<List<RoleVM>> IBaseService<RoleVM>.GetAllEntities(BaseServiceEntityModel<RoleVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<RoleVM> IBaseService<RoleVM>.GetEntityById(BaseServiceEntityModel<RoleVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IBaseService<RoleVM>.UpdateEntityById(BaseServiceEntityModel<RoleVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }
    }
}
