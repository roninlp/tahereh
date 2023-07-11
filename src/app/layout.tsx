import "@/app/globals.css";
import { Vazir, Paeez } from "@/fonts/fonts";
import Header from "@/components/Header";

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
