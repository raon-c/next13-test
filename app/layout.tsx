import "../styles/globals.css";
import "../styles/Home.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
