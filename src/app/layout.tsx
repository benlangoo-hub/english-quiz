import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Quiz",
  description: "Grade 4–12 English practice for Chinese students"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-full antialiased bg-[#f3f1ec] text-zinc-900">
        {children}
      </body>
    </html>
  );
}
