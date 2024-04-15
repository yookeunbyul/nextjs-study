import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Control } from "./Control";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const resp = await fetch("http://localhost:9999/topics", {
    cache: "no-store",
  });
  const topics = await resp.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">Web</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
