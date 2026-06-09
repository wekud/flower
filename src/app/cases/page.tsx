import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "花艺作品",
  description: "欣赏花语轩高端跳舞兰花艺作品",
};

const works = [
  {
    title: "五星级酒店大堂花艺",
    category: "商业花艺",
    desc: "为五星级酒店设计的跳舞兰主题大堂花艺，每周更换，彰显高端品味。",
    tags: ["商业", "跳舞兰", "酒店"],
    img: "/images/1780991513276.jpg",
  },
  {
    title: "高端婚礼跳舞兰花门",
    category: "婚礼花艺",
    desc: "跳舞兰与白玫瑰打造的梦幻花门，为婚礼增添优雅与浪漫。",
    tags: ["婚礼", "花门", "跳舞兰"],
    img: "/images/1780991513291.jpg",
  },
  {
    title: "私人会所桌花定制",
    category: "定制花艺",
    desc: "为私人会所定制的跳舞兰桌花，每周配送，保持空间的艺术氛围。",
    tags: ["会所", "桌花", "定期配送"],
    img: "/images/1780991513253.jpg",
  },
  {
    title: "企业开业庆典花篮",
    category: "商务花艺",
    desc: "企业开业定制花篮，跳舞兰为主花，搭配红金色系，寓意繁荣昌盛。",
    tags: ["开业", "花篮", "商务"],
    img: "/images/1780991513216.jpg",
  },
  {
    title: "奢侈品店橱窗花艺",
    category: "商业花艺",
    desc: "为国际奢侈品牌门店设计的橱窗花艺，跳舞兰与永生花的完美结合。",
    tags: ["奢侈品", "橱窗", "永生花"],
    img: "/images/1780991513198.jpg",
  },
  {
    title: "生日派对花艺布置",
    category: "派对花艺",
    desc: "高端生日派对全场花艺布置，跳舞兰主题，打造梦幻氛围。",
    tags: ["生日", "派对", "全场布置"],
    img: "/images/1780991513168.jpg",
  },
];

const categories = ["全部", "商业花艺", "婚礼花艺", "定制花艺", "商务花艺", "派对花艺"];

export default function CasesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">花艺作品</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            每一件作品，都是对美的极致追求
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((item) => (
              <div
                key={item.title}
                className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-amber-700 font-medium">{item.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
