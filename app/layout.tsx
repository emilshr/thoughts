import "./globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thoughts",
  description: "Random dump of thoughts from Emil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center`}>
        <NextTopLoader />
        <div className="flex flex-col py-4 w-full min-h-screen sm:max-w-screen-sm px-4 sm:px-0">
          {children}
        </div>
      </body>
    </html>
  );
}
