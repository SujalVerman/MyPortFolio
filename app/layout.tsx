import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Sujal Verman - Full Stack Developer",
  description: "Portfolio of Sujal Verman - Full Stack Developer specializing in Next.js, TypeScript, and Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

