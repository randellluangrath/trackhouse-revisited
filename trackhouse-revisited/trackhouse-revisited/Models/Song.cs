namespace trackhouse_revisited.Models
{
    public class Song
    {
        public int ID { get; set; }

        public int AlbumID { get; set; }

        public string Title { get; set; }

        public string Lyrics { get; set; }

        public int Duration { get; set; }

        public Album Album { get; set; }
    }
}
