namespace Auth.Model.Auth
{
    public class URLVM : BaseModel
    {
        public int Id { get; set; }
        public int EntityId { get; set; }
        public int ServiceId { get; set; }
        public string Name { get; set; }
    }
}
