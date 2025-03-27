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

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            DbInitializer.Initialize(builder);
        }
        public DbSet<Rating> Ratings { get; set; }  // Add the DbSet for ratings
    }
}
