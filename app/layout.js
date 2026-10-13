import "./globals.css";
import ScrollMotion from "../components/ScrollMotion";

export const metadata = {
  metadataBase: new URL("https://hoangbangweding.click"),
  title: "Hoàng & Bằng — Ngày chung đôi",
  description: "Thiệp mời cưới của Hoàng và Bằng, ngày 20–21 tháng 10 năm 2026.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://hoangbangweding.click/",
    title: "Hoàng & Bằng — Ngày chung đôi",
    description: "Thiệp mời cưới của Hoàng và Bằng, ngày 20–21 tháng 10 năm 2026.",
    images: [
      {
        url: "/images/anh5.webp",
        width: 1200,
        height: 630,
        alt: "Ảnh cưới Hoàng và Bằng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoàng & Bằng — Ngày chung đôi",
    description: "Thiệp mời cưới của Hoàng và Bằng, ngày 20–21 tháng 10 năm 2026.",
    images: ["/images/anh5.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <ScrollMotion />
        {children}
      </body>
    </html>
  );
}
