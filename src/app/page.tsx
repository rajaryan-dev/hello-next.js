"use client";

import Link from "next/link";

export default function HomePage() {
  const routes = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Blog → First", path: "/blog/first" },
    { name: "Blog → Second", path: "/blog/second" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Docs (catch-all-routes)", path: "/docs/catch-all-segements" },
    { name: "Products", path: "/products" },
    { name: "Product → Review", path: "/products/123/reviews/456" }, // dynamic example
    { name: "Profile", path: "/profile" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
    { name: "Forgot Password", path: "/forgot-password" },
    { name: "File_Colocation", path: "/file-colocation" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Next.js App Routes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="p-4 bg-white text-center shadow rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            {route.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
