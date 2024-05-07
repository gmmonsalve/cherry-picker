using backendCherryPicker.Database;
using backendCherryPicker.Repositories;
using backendCherryPicker.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Db Connection
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<CherryPickerDbContext>(options => options.UseSqlServer(connectionString));

//Repository
builder.Services.AddScoped<IDateRepository, DateRepository>();

//Services
builder.Services.AddScoped<IDateService, DateService>();






//Put services before this line
var app = builder.Build();

//TODO: Revisar por qué no funciona
app.UseRouting();



app.UseSwagger();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwaggerUI();
}

if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
