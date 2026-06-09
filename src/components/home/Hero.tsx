import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px]">
      <Image
        src="/images/1780991513253.jpg"
        alt="跳舞兰花艺"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
            跳舞兰
            <span className="text-amber-400"> 高端花艺</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed">
            云南昆明产地直发，精选A级跳舞兰，每一枝都经过严格筛选。为追求品质的您，呈献最优雅的花艺体验。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
            >
              尊享选购
            </Link>
            <Link
              href="/cases"
              className="px-8 py-3 border border-white/50 text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
            >
              花艺鉴赏
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
