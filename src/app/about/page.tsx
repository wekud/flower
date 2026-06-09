import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解花语轩——专注跳舞兰高端花艺的品牌故事",
};

const team = [
  { name: "林雅兰", role: "创始人 & 首席花艺师", bio: "法国花艺学院认证，15年高端花艺经验" },
  { name: "陈艺", role: "花艺设计师", bio: "专注跳舞兰花艺设计，风格优雅独特" },
  { name: "王物流", role: "品控主管", bio: "严控每一枝花材品质，确保A级标准" },
  { name: "李尊享", role: "客户服务经理", bio: "一对一专属服务，用心对待每一位客户" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">关于花语轩</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            专注跳舞兰高端花艺，只为懂花的您
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">品牌故事</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                花语轩创立于2016年，是国内专注于跳舞兰高端花艺的品牌。我们深知，跳舞兰以其优雅的花姿和明亮的色彩，是花中贵族的代表。
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们与云南昆明核心种植基地深度合作，只选用A级花材，每一枝跳舞兰都经过严格筛选，确保花枝挺拔、花量饱满、色泽鲜亮。
              </p>
              <p className="text-gray-600 leading-relaxed">
                10年来，我们为超过5000位高端客户和百余家知名企业提供了定制花艺服务。花语轩，让每一束跳舞兰都成为艺术品。
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&q=80"
                alt="花语轩花艺"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">核心团队</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-xl text-center shadow-sm">
                <div className="w-20 h-20 rounded-full bg-amber-100 mx-auto mb-4 flex items-center justify-center text-2xl text-amber-700 font-bold">
                  {member.name[0]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-amber-700 text-sm mt-1">{member.role}</p>
                <p className="text-gray-500 text-sm mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">我们的承诺</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "A级花材", desc: "只选用昆明核心产区A级跳舞兰，品质有保障" },
              { title: "匠心花艺", desc: "资深花艺师手工制作，每一束都是独一无二的艺术品" },
              { title: "尊享服务", desc: "专车专人配送，全程温控呵护，7天无理由退换" },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
