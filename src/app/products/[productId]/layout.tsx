export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 shadow-md text-center">
        <h1 className="text-3xl font-bold tracking-wide">🛍️ Product Details</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-10">
        <div className="bg-white shadow-lg rounded-2xl p-8 transition hover:shadow-2xl">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Raj's Store. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
