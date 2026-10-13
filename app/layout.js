import "./globals.css";

export const metadata = {
  title: "Hoàng & Bằng — Ngày chung đôi",
  description: "Thiệp mời cưới của Hoàng và Bằng, ngày 20–21 tháng 10 năm 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
