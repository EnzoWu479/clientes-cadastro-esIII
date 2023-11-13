using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClientesCrud.Context;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace ClientesCrud.Services
{
    public class Configure
    {
        public WebApplicationBuilder Builder { get; set; }
        public Configure(WebApplicationBuilder builder)
        {
            Builder = builder;
        }
        public void ConfigureServices()
        {
            Builder.Services.AddDbContext<ClienteContext>(opt =>
                opt.UseNpgsql(Builder.Configuration.GetConnectionString("ConexaoPadrao")));

            var key = Encoding.ASCII.GetBytes(Settings.Secret.SecretKey);

            Builder.Services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            // Add services to the container. 
            Builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            Builder.Services.AddEndpointsApiExplorer();
            Builder.Services.AddSwaggerGen();
        }
    }
}