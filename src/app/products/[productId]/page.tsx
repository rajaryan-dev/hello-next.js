import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay

  const { productId } = params;
  const id = parseInt(productId);

  // ❌ Handle invalid or out-of-range IDs
  if (isNaN(id) || id < 1 || id > 20) {
    notFound();
  }

  // ✅ Fetch product details
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-10 transition-all">
        {/* 🖼️ Product Image */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* 📋 Product Info */}
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div>
            <p className="text-sm text-gray-500 mb-1">
              Product ID: {product.id}
            </p>
            <h1 className="text-3xl font-bold mb-3 text-gray-800">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-yellow-500 text-lg">⭐</span>
              <p className="text-gray-700">
                {product.rating.rate} / 5 ({product.rating.count} reviews)
              </p>
            </div>

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Category:</span>{" "}
              <span className="capitalize">{product.category}</span>
            </p>

            <p className="text-3xl font-bold text-blue-600 mt-4">
              ${product.price}
            </p>
          </div>

          {/* 🔗 Back Button */}
          <a
            href="/products"
            className="mt-8 inline-block text-center bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            ← Back to Products
          </a>
        </div>
      </div>
    </div>
  );
}
