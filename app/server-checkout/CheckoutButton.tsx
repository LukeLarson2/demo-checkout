"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  total: number;
}

export default function CheckoutButton({ total }: CheckoutButtonProps) {
  const [processing, setProcessing] = useState(false);

  const handleCheckout = () => {
    setProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setProcessing(false);
      alert("Transaction completed!");
    }, 1500);
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={processing}
      className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/80 transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed"
    >
      {processing
        ? "Processing..."
        : `Complete Transaction ($${total.toFixed(2)})`}
    </button>
  );
}
