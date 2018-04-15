﻿using Microsoft.EntityFrameworkCore;
using trackhouse_revisited.Models;

namespace trackhouse_revisited.DataAccess
{
    public class MusicContext : DbContext
    {
        public MusicContext(DbContextOptions<MusicContext> options) : base(options)
        {
        }

        public DbSet<Album> Albums { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Album>().ToTable("Album");
        }
    }
}
