import "./globals.css";
import localFont from "next/font/local";

import Nav from "./components/nav";

const spaceGroteskFont = localFont({
  src: "../public/fonts/space-grotesk_variable-font_wght.ttf",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGroteskFont.variable} font-sans bg-primary px-5 sm:px-8 lg:px-40`}
      >
        <div className="max-w-6xl mx-auto">
          <Nav />
          {children}
          <Nav />
        </div>
      </body>
    </html>
  );
}
