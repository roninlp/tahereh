import Header from "@/components/Header";
import "@/app/globals.css";
import { Vazir, Paeez } from "@/fonts/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${Vazir.variable} ${Paeez.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
