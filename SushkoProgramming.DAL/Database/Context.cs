using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using SushkoProgramming.DAL.Entity;

namespace SushkoProgramming.DAL.Database {
    public class Context : DbContext {
        public DbSet<Message> Messages { get; set; }

        public Context (DbContextOptions<Context> options) : base (options) { }
    }
}