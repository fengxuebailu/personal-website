import type { Metadata } from "next";
import { Playfair_Display, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

// 优雅的英文字体 - Playfair Display（适合标题）
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

// 中文字体 - 思源宋体
const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "登陆 - 个人作品集",
  description: "登陆页面 - 个人作品集网站",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-CN"
      className={`${playfairDisplay.variable} ${notoSerifSC.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
