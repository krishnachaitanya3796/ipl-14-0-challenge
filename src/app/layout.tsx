import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IPL 14-0 Challenge",
  description:
    "Draft historical IPL players and simulate the chase for a perfect 14-0 league season.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#06100b] text-stone-100">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(22,163,74,0.16),transparent_32%),linear-gradient(135deg,#06100b_0%,#10130d_48%,#1a0c0c_100%)]">
          {children}
        </div>
      </body>
    </html>
  );
}
