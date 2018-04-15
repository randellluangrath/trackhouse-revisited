using System.Collections.Generic;

namespace trackhouse_revisited.Models
{
    public class Album
    {
        public string name { get; set; }

        public string releaseDate { get; set; }

        public int duration { get; set; }

        List<Song> songs { get; set; }
    }
}
