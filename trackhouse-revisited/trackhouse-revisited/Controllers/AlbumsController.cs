using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using trackhouse_revisited.DataAccess;
using trackhouse_revisited.Models;

namespace trackhouse_revisited.Controllers
{
    [Route("api/[controller]")]
    public class AlbumsController: Controller
    {
        private readonly MusicContext _context;

        public AlbumsController(MusicContext context)
        {
            _context = context;
        }

        [HttpGet()]
        public List<Album> GetAlbums()
        {
            return _context.Albums.ToListAsync().GetAwaiter().GetResult();
        }

        [HttpGet("{name}")]
        public Album GetAlbum(string name)
        {
            return _context.Albums.SingleOrDefaultAsync(x => x.Name == name).GetAwaiter().GetResult();
        }
    }
}
