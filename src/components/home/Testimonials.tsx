const testimonials = [
  {
    name: "王女士",
    content: "花语轩的跳舞兰品质真的没得说，每一枝都像是艺术品。公司开业用花全交给了他们，客户都赞不绝口。",
  },
  {
    name: "陈总",
    content: "作为高端会所的合作方，花语轩的花艺设计和品质完全符合我们的要求，跳舞兰的鲜活度一流。",
  },
  {
    name: "林小姐",
    content: "闺蜜生日送了一束跳舞兰定制花束，她感动哭了。包装精致，花材新鲜，值得这个价格。",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            尊贵客户评价
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            听听高端客户怎么说
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-600 leading-relaxed">
                &ldquo;{item.content}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                  {item.name[0]}
                </div>
                <div className="font-semibold text-gray-900">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
