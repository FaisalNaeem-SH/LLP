using Auth.Model.Auth;
using Auth.Service.AuthService.Role;
using AuthService.Service.Auth.URL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Auth.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : BaseController<RoleVM>
    {
        public RoleController(IRoleService roleService, IServiceProvider _serviceProvider) : base(roleService, _serviceProvider)
        {

        }
    }
}
