export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Product Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the product you’re looking for doesn’t exist.
      </p>
      <a
        href="/products"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        🔙 Back to Products
      </a>
    </div>
  );
}
