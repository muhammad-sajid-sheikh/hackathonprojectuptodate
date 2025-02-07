import { Suspense } from "react";
import PaymentParams from "@/components/helper/PaymentParams";

export default function PaymentPage() {
  return (
    <div className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-black to-gray-600">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Muhammad Sajid</h1>
        <Suspense fallback={<h2 className="text-2xl">Loading amount...</h2>}>
          <PaymentParams />
        </Suspense>
      </div>
    </div>
  );
}
