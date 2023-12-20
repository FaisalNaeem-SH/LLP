using Auth.Model.Auth;
using Auth.Service.AuthService.Module;
using AuthService.Service.Auth.URL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Auth.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModuleController : BaseController<ModuleVM>
    {
        public ModuleController(IModuleService moduleService, IServiceProvider _serviceProvider) : base(moduleService, _serviceProvider)
        {

        }
    }
}
