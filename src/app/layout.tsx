import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cuntism",
  description: `Strayan Social Disease: Whinging, Advanced Wankerism, Cuntishness and some good old Terminal Tall Poppy. 

Fuck me dead, let it rip. The mastered art of being a deadset cunt. Passed down through generations of bitter bastards.

Who does she think she is?

Before you know it, you're standing at the servo complaining about fuel prices, at Woolies having a whinge about the self-checkout being "fucked again", or chuckin a uey to the local Bunnings sausage sizzle and telling everyone at the rsl how you "could've gone pro" if it weren't for that knee injury in year 12.

Warning: May cause permanent damage to national productivity and innovation. 

Treatment: None available. Just chuck a sickie and she'll be right.

This is my story, and yours too?`,
  metadataBase: new URL("https://www.cuntism.net"),
  twitter: {
    card: "summary_large_image",
    creator: "@emmajane1313",
    title: "Cuntism",
    description:
      "Strayan Social Disease: Whinging, Advanced Wankerism, Cuntishness and some good old Terminal Tall Poppy.",
  },
  openGraph: {
    title: "Cuntism",
    description:
      "Strayan Social Disease: Whinging, Advanced Wankerism, Cuntishness and some good old Terminal Tall Poppy.",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Emma-Jane MacKinnon-Lee",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "digitalax.xyz",
    "f3manifesto.xyz",
    "syntheticfutures.xyz",
    "Women",
    "Life",
    "Freedom",
  ],
  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://emmajanemackinnonlee.com/",
              sameAs: [
                "https://emmajanemackinnonlee.com/",
                "https://syntheticfutures.xyz/",
                "https://web3fashion.xyz/",
                "https://emancipa.xyz/",
                "https://highlangu.com/",
                "https://digitalax.xyz/",
                "https://cc0web3fashion.com/",
                "https://cc0web3.com/",
                "https://cuntism.net/",
                "https://dhawu.com/",
                "https://casadeespejos.com/",
                "https://emancipa.net/",
                "https://dhawu.emancipa.xyz/",
                "https://highlangu.emancipa.xyz/",
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
