namespace Auth.Model
{
    public class BaseServiceEntityModel<T>
    {
        public T Entity { get; set; }
        public string ?EntityName { get; set; }
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
        public List<string>? SortingArray { get; set; }
        public List<string>? FilterArray { get; set; }
        public int? EntityId { get; set; }
        public BaseServiceEntityModel()
        {
            Entity = default(T);
            PageNumber = 1;
            PageSize = 10;
            SortingArray = new List<string>();
            FilterArray = new List<string>();
        }
    }
}
