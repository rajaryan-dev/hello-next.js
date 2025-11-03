export default async function ProductReviews({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  // ✅ Simulated reviews (you can replace this with a real API later)
  const reviews = [
    {
      id: 1,
      user: "Aarav Sharma",
      rating: 5,
      comment:
        "Absolutely loved this product! Great quality and worth every rupee.",
      date: "2025-10-21",
    },
    {
      id: 2,
      user: "Priya Mehta",
      rating: 4,
      comment:
        "Good overall, but packaging could have been better. Delivery was fast though!",
      date: "2025-10-23",
    },
    {
      id: 3,
      user: "Rohit Verma",
      rating: 3,
      comment:
        "Product is okay, but not as great as described. Still usable and decent.",
      date: "2025-10-25",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Reviews for Product #{productId}
      </h1>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{review.user}</h2>
              <span className="text-yellow-500 font-medium">
                ⭐ {review.rating}/5
              </span>
            </div>
            <p className="text-gray-700 mb-3">{review.comment}</p>
            <p className="text-sm text-gray-500">Reviewed on {review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
