namespace Auth.Repository
{
    public class BaseRepository
    {
        public readonly ILogger<BaseRepository> _logger;

        public IConfiguration _configuration;
        public string connectionString { get; set; }
        public BaseRepository(IConfiguration config, ILogger<BaseRepository> logger)
        {
            _configuration = config;
            connectionString = _configuration.GetConnectionString("dbConnection");
            _logger = logger;
        }
    }
}
