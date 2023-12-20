using Auth.Model;
using Auth.Model.Auth;
using AuthService.Service;
using AuthService.Service.Auth.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace Auth.Controllers.Auth
{
    [Route("api/Auth/[controller]")]
    [ApiController]
    public class UserController : BaseController<UserVM>
    {
        public UserController(IUserService userService, IServiceProvider _serviceProvider) : base(userService, _serviceProvider)
        {
           
        }
    }
}
