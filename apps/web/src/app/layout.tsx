import Link from "next/link";

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <header>
            <p>This is the header</p>
            <div><Link href={"/about"}>About</Link></div>
            <div><Link href={"/contact"}>Contact</Link></div>
          </header>
          {children}
          <footer>This is the footer</footer>
        </body>
      </html>
    );
  }

  export const metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
  };