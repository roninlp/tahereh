import ContactForm from "@/components/ContactForm";

export default function contact() {
  return (
    <main className="h-screen bg-veryLightGray">
      <div
        dir="rtl"
        className="mx-auto flex w-4/5 max-w-5xl flex-col px-4 pt-36"
      >
        <h1 className="px-8 font-vazir text-5xl underline underline-offset-[18px]">
          تماس با من
        </h1>
        <div className="pt-10">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
