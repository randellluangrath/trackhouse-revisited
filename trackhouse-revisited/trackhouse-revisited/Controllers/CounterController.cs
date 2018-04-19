using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using trackhouse_revisited.DataAccess;
using trackhouse_revisited.Models;

namespace trackhouse_revisited.Controllers
{
    [Route("api/[controller]")]
    public class CounterController : Controller
    {
        private readonly MusicContext _context;

        public CounterController(MusicContext context)
        {
            _context = context;
        }

        [HttpGet()]
        public List<string> GetAllSongs(){

            var songs = _context.Songs.ToList();
            string lyrics = "";

            Counter result = new Counter();

            foreach (var song in songs)
            {
                lyrics = song + " " + lyrics;
            }

            return null;
        }

    }
}