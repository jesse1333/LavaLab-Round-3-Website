import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: [
    {
      path: "/fonts/Manrope-Medium.ttf",
      weight: "500",
    },
    {
      path: "/fonts/Manrope-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const beVietnamPro = localFont({
  src: "/fonts/BeVietnamPro-SemiBold.ttf",
  variable: "--font-beVietnamPro",
  display: "swap",
  weight: "600",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${beVietnamPro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
