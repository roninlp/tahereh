import "@/app/globals.css";
import Header from "@/components/Header";
import { Paeez, Vazir } from "@/fonts/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${Vazir.variable} ${Paeez.variable}`}>
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
