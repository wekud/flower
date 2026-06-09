import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-cream-50 to-amber-100 text-gray-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            跳舞兰
            <span className="text-amber-600"> 高端花艺</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
            云南昆明产地直发，精选A级跳舞兰，每一枝都经过严格筛选。为追求品质的您，呈献最优雅的花艺体验。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
            >
              尊享选购
            </Link>
            <Link
              href="/cases"
              className="px-8 py-3 border border-amber-300 text-amber-700 hover:bg-amber-50 rounded-lg font-semibold transition-colors"
            >
              花艺鉴赏
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
