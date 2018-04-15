namespace trackhouse_revisited.Models
{
    public class Song
    {
        public int ID { get; set; }

        public int AlbumID { get; set; }

        public string title { get; set; }

        public string lyrics { get; set; }

        public int duration { get; set; }

        public Album Album { get; set; }
    }
}
