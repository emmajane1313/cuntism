import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cuntism",
  description: `Strayan Social Disease: Whinging, Advanced Wankerism, Cuntishness and some good old Terminal Tall Poppy. 

Fuck me dead, let it rip. The mastered art of being a deadset cunt. Passed down through generations of bitter bastards.

Who does she think she is?

Before you know it, you're standing at the servo complaining about fuel prices, at Woolies having a whinge about the self-checkout being "fucked again", or chuckin a uey to the local Bunnings sausage sizzle and telling everyone at the pub how you "could've gone pro" if it weren't for that knee injury in year 12.

Warning: May cause permanent damage to national productivity and innovation. 

Treatment: None available. Just chuck a sickie and she'll be right.

This is my story, and yours too?`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
