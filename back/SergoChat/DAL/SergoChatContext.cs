using DAL.ModelConfigurations;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class SergoChatContext : DbContext
    {
        public SergoChatContext(DbContextOptions<SergoChatContext> options) : base(options) { }

        public DbSet<User> User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
        }
    }
}