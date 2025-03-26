namespace Amber.Sun.Domain.Catalog
{
    public class Rating
    {
        public int Stars { get; set; }
        public int UserName { get; set; }
        public string Review { get; set; }

        public Rating(int stars, int userName, string review)
        {
           if (stars < 1 || stars > 5)
            {
                throw new ArgumentOutOfRangeException("Stars must be between 1 and 5");
            if (string.IsNullOrWhiteSpace(username))
            {
                throw new ArgumentException("Review cannot be empty");
            }
           
            Stars = stars;
            UserName = userName;
            Review = review;
        }
    
}

