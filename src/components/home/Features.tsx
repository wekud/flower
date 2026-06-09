const features = [
  {
    icon: "🌸",
    title: "A级跳舞兰",
    description: "精选云南昆明A级跳舞兰花材，花枝挺拔、花量饱满",
  },
  {
    icon: "✨",
    title: "高端定制",
    description: "资深花艺师一对一服务，根据场景专属定制花艺方案",
  },
  {
    icon: "🏆",
    title: "品牌甄选",
    description: "严选每一枝花材，只呈现最优质的花艺作品",
  },
  {
    icon: "🎁",
    title: "奢享包装",
    description: "高端礼盒包装，丝带缎面细节，尽显尊贵品味",
  },
  {
    icon: "🚗",
    title: "专车配送",
    description: "全城专车专人配送，全程温控呵护，确保完美呈现",
  },
  {
    icon: "💎",
    title: "尊享售后",
    description: "7天无理由退换，专属客服全程跟踪服务",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            为何选择花语轩
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            专注跳舞兰高端花艺，只为懂花的您
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
