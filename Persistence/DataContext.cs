using Microsoft.EntityFrameworkCore;
using System;
using Domain;

namespace Persistence
{
    public class DataContext : DbContext
    {
		public DataContext(DbContextOptions options) : base(options)
		{

		}

		public DbSet<Value> Values { get; set; }
    }
}
