using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using trackhouse_revisited.DataAccess;
using trackhouse_revisited.Models;

namespace trackhouse_revisited.Controllers
{
    [Route("api/[controller]")]
    public class SongsController : Controller
    {
        private readonly MusicContext _context;

        public SongsController(MusicContext context)
        {
            _context = context;
        }

        [HttpGet("{title}")]
        public Song GetSong(string title)
        {
            return _context.Songs.SingleOrDefaultAsync(x => x.Title == title).GetAwaiter().GetResult();
        }
    }
}
