namespace AmberSun.Domain.Catalog
{
    public class Rating
    {
         public Rating(int stars, string userName, string review)
        {
           if (stars < 1 || stars > 5)
            {
                throw new ArgumentOutOfRangeException("Star rating must be an integer of: 1, 2, 3, 4, 5.");
            }
            if (string.IsNullOrEmpty(userName))
            {
                throw new ArgumentException("UserName cannot be null.");
            }
           
            this.Stars = stars;
            this.UserName = userName;
            this.Review = review;
        }
        public int Stars { get; set; }
        public int Id {get; set; }
        public string UserName { get; set; }
        public string Review { get; set; }
    }

       
}
    

    


