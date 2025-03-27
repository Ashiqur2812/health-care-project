import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Nav from "./components/Nav";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nordis-Health App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Banner></Banner> */}
        {/* <div className="h-screen h-max-[600px]">{children}</div> */}
        <Nav/>
        <div className="">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
