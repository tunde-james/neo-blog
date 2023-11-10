"use client";

import { useState } from "react";

function Newsletter() {
  const [subscribed, setSubscribed] = useState<boolean>(false);

  async function create(formData: FormData) {
    const email = formData.get("email");

    await fetch("/api/beehiiv", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setSubscribed(true);
        }
      })
      .catch((err) => console.log(err));
  }

  if (subscribed)
    return (
      <div className="mt-4 flex flex-col text-white">
        <h2 className="text-2xl">Thank you for subscribing</h2>
        <p className="">
          You&apos;ll receive the latest tech news and announcements in your
          inbox.
        </p>
      </div>
    );

  return (
    <form action={create} className="mt-4">
      <div className="">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="flex-1 rounded-full rounded-r-none border-2 bg-gray-200 p-2 px-4 py-3 text-gray-800 placeholder-gray-500 outline-none focus:bg-gray-100"
        />
        <button className="rounded-full rounded-l-none border-2 bg-gray-900 px-4 py-3 font-semibold uppercase text-gray-100 hover:bg-gray-800">
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default Newsletter;
