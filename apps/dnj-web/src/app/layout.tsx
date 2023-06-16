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
        <div id="page" className="s-pagewrap">
          <Header />
          <div id="content" className="s-content s-content--page">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}