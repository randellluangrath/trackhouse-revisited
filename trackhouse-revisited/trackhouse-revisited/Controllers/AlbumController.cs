using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using trackhouse_revisited.Models;

namespace trackhouse_revisited.Controllers
{
    [Route("api/[controller]")]
    public class AlbumController: Controller
    {
        [HttpGet()]
        public List<Album> Albums()
        {
            // Retrieve albums from database using Entity Framework 

            return new List<Album>();
        }
    }
}
