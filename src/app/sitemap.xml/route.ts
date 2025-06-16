import { NextResponse } from "next/server";
import { PAGINAS } from "../lib/constantes";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://cuntism.net";

  const imagesXml = () =>
    PAGINAS.map(
      (image) =>
        `
       <image:image>
            <image:loc>${baseUrl}/${image.imagen}/</image:loc>
            <image:title><![CDATA[${image.texto} | Cuntism | Emma-Jane MacKinnon-Lee]]></image:title>
            <image:caption><![CDATA[${image.texto} | Cuntism | Emma-Jane MacKinnon-Lee]]></image:caption>
          </image:image>
        `
    ).join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
   <url>
      <loc>${baseUrl}/</loc>
        ${imagesXml()}
         </url>

</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
