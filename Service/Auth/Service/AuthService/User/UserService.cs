using Auth.Model;
using Auth.Model.Auth;

namespace AuthService.Service.Auth.User
{
    public class UserService : IUserService
    {
        Task<bool> IBaseService<UserVM>.CreateEntity(BaseServiceEntityModel<UserVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IBaseService<UserVM>.DeleteEntityById(BaseServiceEntityModel<UserVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<List<UserVM>> IBaseService<UserVM>.GetAllEntities(BaseServiceEntityModel<UserVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<UserVM> IBaseService<UserVM>.GetEntityById(BaseServiceEntityModel<UserVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }

        Task<bool> IBaseService<UserVM>.UpdateEntityById(BaseServiceEntityModel<UserVM> baseServiceEntityModel)
        {
            throw new NotImplementedException();
        }
    }
}
