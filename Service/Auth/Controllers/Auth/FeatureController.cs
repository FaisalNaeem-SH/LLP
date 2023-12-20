using Auth.Model.Auth;
using Auth.Service.AuthService.Feature;
using AuthService.Service.Auth.URL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Auth.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeatureController : BaseController<FeatureVM>
    {
        public FeatureController(IFeatureService featureService, IServiceProvider _serviceProvider) : base(featureService, _serviceProvider)
        {

        }
    }
}
