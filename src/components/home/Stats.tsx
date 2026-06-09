const stats = [
  { value: "5000+", label: "高端客户" },
  { value: "99.9%", label: "好评率" },
  { value: "100%", label: "A级花材" },
  { value: "10", label: "年专注跳舞兰" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-amber-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-amber-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
