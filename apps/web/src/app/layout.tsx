import { Header, Footer } from "ui"
import "./styles.css";
import "./vendor.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="top">
        <div id="page" className="s-pagewrap ss-home">
          <Header />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}