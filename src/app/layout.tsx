import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js | Hello World",
  description: "A modern Next.js app structure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 min-h-screen flex flex-col font-sans text-gray-900">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
            <h1 className="text-3xl font-bold tracking-wide">🚀 Hello World</h1>
            <nav className="flex space-x-6 text-lg font-medium">
              <a href="/" className="hover:text-yellow-300 transition">
                Home
              </a>
              <a href="/about" className="hover:text-yellow-300 transition">
                About
              </a>
              <a href="/blog" className="hover:text-yellow-300 transition">
                Blog
              </a>
              <a href="/profile" className="hover:text-yellow-300 transition">
                Profile
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center p-8 text-center">
          <div className="max-w-4xl w-full bg-white rounded-2xl shadow-md p-10 transition hover:shadow-xl">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-200 text-center py-6 mt-auto">
          <p className="text-lg font-semibold">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
          <p className="text-sm text-gray-400">Built with ❤️ using Next.js</p>
        </footer>
      </body>
    </html>
  );
}
