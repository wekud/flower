import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          为重要时刻甄选一束跳舞兰
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          专车配送，全程呵护，只为那一刻的惊艳
        </p>
        <div className="mt-8">
          <Link
            href="/products"
            className="inline-block px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold text-lg transition-colors"
          >
            立即选购
          </Link>
        </div>
      </div>
    </section>
  );
}
