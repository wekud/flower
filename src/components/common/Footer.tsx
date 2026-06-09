import Link from "next/link";

const footerLinks = [
  {
    title: "快速导航",
    links: [
      { label: "首页", href: "/" },
      { label: "鲜花商城", href: "/products" },
      { label: "花艺作品", href: "/cases" },
      { label: "关于我们", href: "/about" },
    ],
  },
  {
    title: "跳舞兰系列",
    links: [
      { label: "臻选跳舞兰", href: "/products" },
      { label: "跳舞兰花篮", href: "/products" },
      { label: "永生跳舞兰", href: "/products" },
      { label: "定制花艺", href: "/contact" },
    ],
  },
  {
    title: "联系我们",
    links: [
      { label: "电话：400-888-9999", href: "tel:4008889999" },
      { label: "微信：huayuxuan_flower", href: "#" },
      { label: "地址：北京市朝阳区花语路88号", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-amber-400 text-xl font-bold mb-4">花语轩</h3>
            <p className="text-sm text-gray-400">
              专注跳舞兰高端花艺，只为懂花的您。
            </p>
            <p className="text-sm text-gray-400 mt-4">
              云南昆明产地直发<br />
              A级花材 · 不满意可退换
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} 花语轩. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">京ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
}
