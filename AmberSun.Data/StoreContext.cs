using Microsoft.EntityFrameworkCore;
using AmberSun.Domain.catalog;  // Make sure to add the correct namespace for your domain models

namespace AmberSun.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }

        public DbSet<Item> Items { get; set; }
        public DbSet<Rating> Ratings { get; set; }  // Add the DbSet for ratings
    }
}
