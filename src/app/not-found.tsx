import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-center px-6">
      {/* 404 Text */}
      <h1 className="text-8xl font-extrabold text-red-600 mb-4 animate-bounce">
        404
      </h1>

      {/* Message */}
      <h2 className="text-3xl font-bold mb-2 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-lg">
        The page you’re looking for doesn’t exist or has been moved. Please
        check the URL or return to the homepage.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
      >
        ⬅️ Go Back Home
      </Link>

      {/* Optional decorative graphic */}
      <div className="mt-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4dZz_A-4cTLlRxFUFnYEGIqsRwp3xjCa3Q&s"
          alt="Not Found Illustration"
          className="w-72 opacity-90"
        />
      </div>
    </div>
  );
}
