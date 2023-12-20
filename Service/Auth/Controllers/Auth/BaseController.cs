using Auth.Model;
using AuthService.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Reflection;

namespace Auth.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController<T> : ControllerBase
    {

        private readonly IBaseService<T> _baseService;
        private readonly IServiceProvider _serviceProvider;
        private IServiceProvider serviceProvider;

        public BaseController(IBaseService<T> baseService, IServiceProvider serviceProvider)
        {
            _baseService = baseService;
            _serviceProvider = serviceProvider;
        }


        [HttpPost("GetAllEntities")]
        public async Task<IActionResult> GetAllEntities(BaseServiceEntityModel<T> baseServiceEntityModel)
        {
            try
            {
                bool result = (bool)typeof(IBaseService<T>).GetMethod("GetAllEntities").Invoke(GetService(baseServiceEntityModel), new object[] { baseServiceEntityModel });
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPost("DeleteEntityById")]
        public async Task<IActionResult> DeleteEntityById(BaseServiceEntityModel<T> baseServiceEntityModel)
        {
            try
            {
                bool result = (bool)typeof(IBaseService<T>).GetMethod("DeleteEntityById").Invoke(GetService(baseServiceEntityModel), new object[] { baseServiceEntityModel });
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }

        [HttpPost("CreateEntity")]
        public async Task<IActionResult> CreateEntity(BaseServiceEntityModel<T> baseServiceEntityModel)
        {
            try
            {
                bool result = (bool)typeof(IBaseService<T>).GetMethod("CreateEntity").Invoke(GetService(baseServiceEntityModel), new object[] { baseServiceEntityModel });
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }


        [HttpPost("GetEntityById")]
        public async Task<IActionResult> GetEntityById(BaseServiceEntityModel<T> baseServiceEntityModel)
        {
            try
            {
                bool result = (bool)typeof(IBaseService<T>).GetMethod("GetEntityById").Invoke(GetService(baseServiceEntityModel), new object[] { baseServiceEntityModel });
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }


        [HttpPost("UpdateEntityById")]
        public async Task<IActionResult> UpdateEntityById(BaseServiceEntityModel<T> baseServiceEntityModel)
        {
            try
            {
                bool result = (bool)typeof(IBaseService<T>).GetMethod("UpdateEntityById").Invoke(GetService(baseServiceEntityModel), new object[] { baseServiceEntityModel });
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }
        private object? GetService(BaseServiceEntityModel<T> baseServiceEntityModel)
        {
            var serviceName = baseServiceEntityModel.EntityName;
            var serviceType = Assembly.GetExecutingAssembly().GetTypes().FirstOrDefault(t => t.Name == $"I{serviceName}Service");
            var service = _serviceProvider.GetRequiredService(serviceType);
            return service;
        }
    }
}
