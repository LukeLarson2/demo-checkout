"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const mockItems = [
  { id: 1, name: "Premium Widget", price: 29.99, quantity: 2 },
  { id: 2, name: "Deluxe Gadget", price: 49.99, quantity: 1 },
  { id: 3, name: "Super Tool", price: 19.99, quantity: 3 },
];

export default function ClientCheckout() {
  const [processing, setProcessing] = useState(false);

  const subtotal = mockItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxRate = 0.08; // 8% tax rate
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleCheckout = () => {
    setProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setProcessing(false);
      alert("Transaction completed!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Demo Selection
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Client Checkout Demo
          </h1>

          <div className="space-y-6">
            {mockItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <p className="text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}

            <div className="space-y-3 pt-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Sales Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mt-6">
                <p className="text-gray-700 text-center">
                  [Insert ExemptionIQ Client Component Implementation Here]
                </p>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Due</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={processing}
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/80 transition-colors disabled:bg-primary/50"
            >
              {processing ? "Processing..." : "Complete Transaction"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
