import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedMatch - 医師と病院の最適なマッチングサービス",
  description:
    "MedMatchは、医師と病院をAIで最適にマッチング。転職・採用の課題を解決し、理想のキャリア・人材との出会いを実現します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
