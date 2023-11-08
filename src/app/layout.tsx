import "@/app/globals.css";
import Header from "@/components/Header";
import { Paeez, Vazir } from "@/fonts/fonts";
import Script from 'next/script'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${Vazir.variable} ${Paeez.variable}`}>
      <head>
      <Script strategy="afterInteractive" type="text/javascript">
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "jn8ct6hfb6");`}
      </Script>
      </head>
      <body
        className={
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
