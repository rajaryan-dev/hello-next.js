import { notFound } from "next/navigation";

export default function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = params;

  // simple validation: if reviewId > 1000, show 404
  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Review #{reviewId} for Product #{productId}
      </h1>
      <p className="text-gray-700 text-lg">
        This is a sample review page for practicing dynamic nested routes in
        Next.js.
      </p>
    </div>
  );
}
