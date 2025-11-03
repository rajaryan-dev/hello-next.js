export default async function ProductList() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay

  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        🛍️ Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            {/* Product Image */}
            <div className="h-56 bg-gray-100 flex justify-center items-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-full w-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="p-5">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-900">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                {product.description}
              </p>
              <p className="text-blue-600 font-bold text-lg mb-4">
                ${product.price}
              </p>

              {/* View Details Button */}
              <a
                href={`/products/${product.id}`}
                className="inline-block w-full text-center bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
