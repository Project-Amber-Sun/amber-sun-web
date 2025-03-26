using System;

namespace Amber.Sun.Domain.Catalog
public Item(string name, string description, string brand, decimal price)
{
    if (string.IsNullOrWhiteSpace(name))
    {
        throw new ArgumentException("Name cannot be empty");
    }
    if (string.IsNullOrWhiteSpace(description))
    {
        throw new ArgumentException("Description cannot be empty");
    }
    if (string.IsNullOrWhiteSpace(brand))
    {
        throw new ArgumentException("Brand cannot be empty");
    }
    if (price < 0)
    {
        throw new ArgumentOutOfRangeException("Price cannot be negative");
    }
    Name = name;
    Description = description;
    Brand = brand;
    Price = price;
}
{
    public class Item
    {
      public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Brand { get; set; }
        public decimal Price { get; set; }

        public List<rating> Ratings { get; set; } = new List<Rating>();
        
    }
{
    public class Item
    {
      public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Brand { get; set; }
        public decimal Price { get; set; }
        
    }
    public void AddRating(Rating rating)
{
    Ratings.Add(rating);
}
}
