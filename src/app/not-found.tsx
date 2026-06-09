import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="text-8xl font-bold text-amber-200 mb-4">404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">页面未找到</h1>
      <p className="text-gray-600 mb-8">
        您访问的页面不存在，可能已被移除或地址有误
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
      >
        返回首页
      </Link>
    </section>
  );
}
