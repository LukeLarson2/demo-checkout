import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ExemptionIQ Demo
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Choose a demo implementation to explore the ExemptionIQ package
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link 
            href="/server-checkout"
            className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Server Component Demo
            </h2>
            <p className="text-gray-600">
              Experience ExemptionIQ implementation using Next.js Server Components
            </p>
          </Link>

          <Link 
            href="/client-checkout"
            className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Client Component Demo
            </h2>
            <p className="text-gray-600">
              See how ExemptionIQ works with React Client Components
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}