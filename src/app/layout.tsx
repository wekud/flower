import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_SC } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Analytics from "@/components/common/Analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.huayuxuan.com"),
  title: {
    default: "花语轩 - 用鲜花传递爱与美好",
    template: "%s | 花语轩",
  },
  description: "云南昆明产地直发，专业花艺师手工制作，全城2小时配送。生日鲜花、求婚花束、婚礼花艺、商务用花，尽在花语轩。",
  keywords: ["鲜花", "花束", "花店", "生日鲜花", "求婚花束", "婚礼花艺", "北京花店"],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.huayuxuan.com",
    siteName: "花语轩",
    title: "花语轩 - 用鲜花传递爱与美好",
    description: "精选全球优质花材，专业花艺师手工制作，全城2小时配送",
  },
  twitter: {
    card: "summary_large_image",
    title: "花语轩 - 用鲜花传递爱与美好",
    description: "精选全球优质花材，专业花艺师手工制作，全城2小时配送",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Florist",
              name: "花语轩",
  description: "云南昆明产地直发，专业花艺师手工制作，全城2小时配送",
              url: "https://www.huayuxuan.com",
              telephone: "400-888-9999",
              address: {
                "@type": "PostalAddress",
                streetAddress: "北京市朝阳区花语路88号",
              },
              openingHours: "Mo-Su 08:00-22:00",
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
