import StarRating from "../../../components/UI/star-rating/StarRating";

type ReviewProps = {
  review: {
    author: string;
    date: string;
    content: string;
    rating: number;
  };
};

function Review({ review }: ReviewProps) {
  return (
    <div className="review">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div
          style={{ display: "flex", flexDirection: "column", marginRight: 10 }}
        >
          <p>{review.author}</p>
          <p>{review.date}</p>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{marginTop: -3, fontSize: 22, marginRight: 10}}>{review.rating}</p>
          <StarRating rating={review.rating} name="" mode="read-only" />
        </div>
      </div>
      <hr style={{ marginTop: 5, marginBottom: 5, height: 1 }} />
      <p>{review.content}</p>
    </div>
  );
}

export default Review;
