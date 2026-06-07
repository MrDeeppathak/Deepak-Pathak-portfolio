import "./globals.css";

export const metadata = {
  title: "Deepak Pathak | Educator, Developer & AI Tools Specialist",
  description:
    "Cinematic EdTech product portfolio for Deepak Pathak featuring AI tools, assessment workflows, and product-minded case studies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
