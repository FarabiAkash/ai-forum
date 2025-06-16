import "./globals.css";

export const metadata = {
  title: "AI Forum Bangladesh",
  description: "Developing by Shahinur Alam Bhuiyan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
