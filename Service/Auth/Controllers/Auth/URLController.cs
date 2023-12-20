using Auth.Model.Auth;
using Auth.Model;
using AuthService.Service.Auth.URL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AuthService.Service.Auth.User;

namespace Auth.Controllers.Auth
{
    [Route("api/Auth/[controller]")]
    [ApiController]
    public class URLController : BaseController<URLVM>
    {
        public URLController(IURLService uRLService, IServiceProvider _serviceProvider) : base(uRLService, _serviceProvider)
        {

        }
        
    }
}
