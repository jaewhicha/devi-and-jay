// imports

import { Footer, HomeHeader } from "ui";
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
    <html lang="en" className="js ss-loaded">
      <body id="top">
        <div id="page" className="s-pagewrap ss-home">
          <HomeHeader />
          <section id="content" className="s-content">
            {children}
          </section>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import "../scripts/main";
import "../scripts/plugins";