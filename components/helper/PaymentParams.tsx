"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import CheckoutPage from "@/components/homepage/CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function PaymentParams() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState<number | null>(null);

  useEffect(() => {
    const fetchedAmount = parseFloat(searchParams.get("amount") || "100.99");
    setAmount(fetchedAmount);
  }, [searchParams]);

  if (amount === null) {
    return <h2 className="text-2xl">Loading amount...</h2>;
  }

  return (
    <>
      <h2 className="text-2xl">
        has requested <span className="font-bold">${amount}</span>
      </h2>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </>
  );
}
