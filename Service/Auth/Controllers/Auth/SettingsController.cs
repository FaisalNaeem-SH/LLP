using Auth.Model.Auth;
using Auth.Service.AuthService.Settings;
using AuthService.Service.Auth.URL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Auth.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingsController : BaseController<SettingsVM>
    {
        public SettingsController(ISettingsService settingsService, IServiceProvider _serviceProvider) : base(settingsService, _serviceProvider)
        {

        }
    }
}
