using System.Collections.Generic;

namespace trackhouse_revisited.Models
{
    public class Album
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public string ReleaseDate { get; set; }

        public int Duration { get; set; }

        ICollection<Song> Songs { get; set; }
    }
}
