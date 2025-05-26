import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// You can define metadata in JS like this (optional in _app.js/_layout.js)
export const metadata = {
  title: "Prince Bhalala",
  description: "This is my portfolio website",
  icons: {
    icon: "/favicon_neon.ico",
    shortcut: "/favicon_neon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
           
        </div>
        {children}
      </body>
    </html>
  );
}
