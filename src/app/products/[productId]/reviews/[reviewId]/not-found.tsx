"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-center px-6">
      {/* 404 Badge */}
      <h1 className="text-7xl font-extrabold text-red-500 mb-2 drop-shadow-md">
        404
      </h1>

      {/* Message */}
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Review Not Found
      </h2>

      {/* Details */}
      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, we couldn’t find{" "}
        <span className="font-semibold text-gray-900">review #{reviewId}</span>
        for{" "}
        <span className="font-semibold text-gray-900">
          product #{productId}
        </span>
        . It might have been removed or doesn’t exist.
      </p>

      {/* Back to Product */}
      <Link
        href={`/products/${productId}/reviews`}
        className="px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition text-lg font-medium"
      >
        🔙 Back to Reviews
      </Link>

      {/* Decorative Illustration */}
      <div className="mt-10">
        <img
          src="https://media.istockphoto.com/id/1295689699/vector/print.jpg?s=612x612&w=0&k=20&c=o6VzHvVewc4JnDZAAeOMAjl8w6X6cLe0M4ql-flDKdU="
          alt="Not Found Illustration"
          className="w-64 opacity-90"
        />
      </div>
    </div>
  );
}
