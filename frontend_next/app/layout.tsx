import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";

// Global style
import "@/styles/global.scss";

// Using optimized font from "next/font"
const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-base' // Custom variable to use this specific font in app
});

export const metadata: Metadata = {
  title: 'Rohit Tewari Portfolio',
  description: 'Portfolio website built using Next js and Sanity CMS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>
        {/* Make sure to keep toaster above children */}
        <Toaster />
        {children}
      </body>
    </html>
  );
}
