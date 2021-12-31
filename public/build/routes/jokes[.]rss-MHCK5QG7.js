import{a as p}from"/build/_shared/chunk-NZCB3PMS.js";import{b as d,f as r}from"/build/_shared/chunk-AKSB5QXU.js";r();r();var l=d(p());function i(e){return e.replaceAll("]]>","]]]]><![CDATA[>")}function u(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}var A=async({request:e})=>{var s;let c=await l.db.joke.findMany({take:100,orderBy:{createdAt:"desc"},include:{jokester:{select:{username:!0}}}}),o=(s=e.headers.get("X-Forwarded-Host"))!=null?s:e.headers.get("host");if(!o)throw new Error("Could not determine domain URL.");let n=`${`${o.includes("localhost")?"http":"https"}://${o}`}/jokes`,a=`
    <rss xmlns:blogChannel="${n}" version="2.0">
      <channel>
        <title>Remix Jokes</title>
        <link>${n}</link>
        <description>Some funny jokes</description>
        <language>en-us</language>
        <generator>Kody the Koala</generator>
        <ttl>40</ttl>
        ${c.map(t=>`
            <item>
              <title><![CDATA[${i(t.name)}]]></title>
              <description><![CDATA[A funny joke called ${u(t.name)}]]></description>
              <author><![CDATA[${i(t.jokester.username)}]]></author>
              <pubDate>${t.createdAt.toUTCString()}</pubDate>
              <link>${n}/${t.id}</link>
              <guid>${n}/${t.id}</guid>
            </item>
          `.trim()).join(`
`)}
      </channel>
    </rss>
  `.trim();return new Response(a,{headers:{"Cache-Control":`public, max-age=${60*10}, s-maxage=${60*60*24}`,"Content-Type":"application/xml","Content-Length":String(Buffer.byteLength(a))}})};export{A as loader};
