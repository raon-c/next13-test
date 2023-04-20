import "../styles/globals.css";
import "../styles/Home.module.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <p>this is root layout</p>
        {children}
      </body>
    </html>
  );
}
