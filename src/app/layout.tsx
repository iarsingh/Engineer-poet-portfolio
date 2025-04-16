import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ViewProvider } from "@/context/ViewContext";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akhilesh Singh - Engineer & Poet",
  description: "Portfolio of Akhilesh Singh, a DevOps Engineer and Poet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <Providers>
          <ViewProvider>
            {children}
          </ViewProvider>
        </Providers>
      </body>
    </html>
  );
}
