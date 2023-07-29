"use client";

import { Button } from "@/components/Button";
import React, { useState } from "react";

function isInputNamedElement(
  e: Element,
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    setIsLoading(true);

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });
    setIsLoading(false);
  }
  return (
    <>
      <form
        action=""
        onSubmit={handleOnSubmit}
        className="mx-auto flex w-10/12 flex-col gap-8 font-vazir lg:w-4/5"
      >
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <label className="block pb-4" htmlFor="name">
              نام
            </label>
            <input
              className="mt-0 block w-full border-0 border-b-2 border-gray-200 bg-veryLightGray px-0.5 focus:border-black focus:ring-0"
              name="name"
              placeholder="اسمتون رو اینجا وارد کنید..."
              type="text"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label className="block pb-4" htmlFor="email">
              ایمیل
            </label>
            <input
              className="mt-0 block w-full border-0 border-b-2 border-gray-200 bg-veryLightGray px-0.5 focus:border-black focus:ring-0"
              name="email"
              placeholder="ایمیل رو اینجا..."
              type="email"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="block pb-4" htmlFor="message">
            پیام
          </label>
          <textarea
            className="mt-0 block w-full border-0 border-b-2 border-gray-200 bg-veryLightGray px-0.5 focus:border-black focus:ring-0"
            name="message"
            placeholder="پیامتون هم اینجا..."
            id="message"
            cols={30}
            rows={5}
          />
        </div>
        <div className="max-w-min">
          <Button disabled={isLoading} type="submit">
            ارسال
          </Button>
        </div>
      </form>
    </>
  );
}
