"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState<string | null>(null);

  useEffect(() => {
    // Client-side fetching of amount
    const fetchedAmount = searchParams.get("amount") || "0";
    setAmount(fetchedAmount);
  }, [searchParams]);

  if (amount === null) {
    return <h2 className="text-2xl text-white text-center">Loading amount...</h2>;
  }

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-black to-gray-600">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank You!</h1>
        <h2 className="text-2xl">You Successfully sent</h2>
        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          ${amount}
        </div>
      </div>
    </main>
  );
}
