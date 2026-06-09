import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "鲜花商城",
  description: "精选跳舞兰及高端花品，云南昆明产地直发",
};

const categories = ["全部", "跳舞兰", "蝴蝶兰", "进口花束", "永生花", "定制花艺"];

const products = [
  {
    name: "黄金跳舞兰·臻选",
    price: "688",
    originalPrice: "888",
    tag: "主推",
    desc: "A级跳舞兰10枝，金色丝带缎面礼盒",
    img: "/images/1780991513037.jpg",
  },
  {
    name: "跳舞兰·雅致花篮",
    price: "1280",
    originalPrice: "1680",
    tag: "高端",
    desc: "跳舞兰搭配进口桔梗，高端手提花篮",
    img: "/images/1780991513076.jpg",
  },
  {
    name: "跳舞兰·蝴蝶兰组合",
    price: "1580",
    originalPrice: "1980",
    tag: "限量",
    desc: "跳舞兰与蝴蝶兰的优雅碰撞，商务首选",
    img: "/images/1780991513113.jpg",
  },
  {
    name: "跳舞兰·永生花礼盒",
    price: "998",
    originalPrice: "1298",
    tag: "礼盒",
    desc: "永生跳舞兰，可保存3年以上，送礼佳选",
    img: "/images/1780991513168.jpg",
  },
  {
    name: "跳舞兰·开业花篮",
    price: "1880",
    originalPrice: "2380",
    tag: "商务",
    desc: "大气红金配色，跳舞兰主花，祝贺开业大吉",
    img: "/images/1780991513198.jpg",
  },
  {
    name: "跳舞兰·婚礼定制",
    price: "2880",
    originalPrice: "3680",
    tag: "定制",
    desc: "专属花艺师一对一设计，婚礼全场花艺定制",
    img: "/images/1780991513216.jpg",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-amber-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">鲜花商城</h1>
          <p className="mt-4 text-lg text-gray-600">
            专注跳舞兰高端花艺，昆明产地直发
          </p>
        </div>
      </section>

      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "全部"
                    ? "bg-amber-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-amber-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item) => (
              <div
                key={item.name}
                className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.tag && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-amber-600 text-white text-xs rounded">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-xl font-bold text-amber-700">¥{item.price}</span>
                    <span className="text-sm text-gray-400 line-through">¥{item.originalPrice}</span>
                  </div>
                  <button className="mt-3 w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-medium transition-colors">
                    立即购买
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
