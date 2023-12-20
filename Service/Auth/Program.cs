using Auth.Model.Auth;
using AuthService.Service.Auth.URL;
using AuthService.Service.Auth.User;
using AuthService.Service;
using Auth.Repository.Auth.URL;
using Microsoft.OpenApi.Models;
using Auth.Service.AuthService.Feature;
using Auth.Service.AuthService.Role;
using Auth.Service.AuthService.Module;
using Auth.Service.AuthService.Settings;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddTransient<IURLService, URLService>();
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<IFeatureService, FeatureService>();
builder.Services.AddTransient<IRoleService, RoleService>();
builder.Services.AddTransient<IModuleService, ModuleService>();
builder.Services.AddTransient<ISettingsService, SettingsService>();

builder.Services.AddScoped<IURLRepository, URLRepository>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    // ... other configurations

    // Check if there are any filters or exclusions
    // that might affect the actions included in Swagger documentation.

    //c.SwaggerDoc("v1", new OpenApiInfo { Title = "Your API", Version = "v1" });

    //var filePath = Path.Combine(System.AppContext.BaseDirectory, "Auth.xml");
    //c.IncludeXmlComments(filePath);
});


var app = builder.Build();


app.UseCors(builder => builder
     .AllowAnyOrigin()
     .AllowAnyMethod()
     .AllowAnyHeader());


// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
