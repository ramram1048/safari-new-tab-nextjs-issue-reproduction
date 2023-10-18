import Navigation from "./Navigation";
import "./styles.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
