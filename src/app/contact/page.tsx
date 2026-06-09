"use client";

import { useState, FormEvent } from "react";

const contactInfo = [
  { icon: "📞", title: "电话", content: "400-888-9999", link: "tel:4008889999" },
  { icon: "💬", title: "微信", content: "huayuxuan_flower", link: "#" },
  { icon: "📍", title: "门店地址", content: "北京市朝阳区花语路88号", link: "#" },
  { icon: "🕐", title: "营业时间", content: "08:00 - 22:00 全年无休", link: "#" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    occasion: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "请输入姓名";
    if (!formData.phone.trim()) {
      newErrors.phone = "请输入电话";
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "请输入正确的手机号";
    }
    if (!formData.message.trim()) newErrors.message = "请描述您的需求";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", occasion: "", message: "" });
  };

  return (
    <>
      <section className="bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">联系我们</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            有任何需求欢迎联系我们，为您定制专属花艺方案
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="text-center p-6 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.content}</p>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">定制咨询</h2>
              {submitted && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  感谢您的咨询，我们会尽快联系您！
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="您的姓名"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-amber-500 ${
                      errors.name ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="联系电话"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-amber-500 ${
                      errors.phone ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 text-gray-600"
                >
                  <option value="">选择送花场景</option>
                  <option value="birthday">生日祝福</option>
                  <option value="love">表白/求婚</option>
                  <option value="wedding">婚礼用花</option>
                  <option value="business">商务用花</option>
                  <option value="holiday">节日送花</option>
                  <option value="other">其他</option>
                </select>
                <div>
                  <textarea
                    placeholder="您的需求描述（预算、花材偏好、配送时间等）..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-amber-500 resize-none ${
                      errors.message ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
                >
                  提交咨询
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">门店位置</h2>
              <div className="bg-amber-50 rounded-xl h-80 flex items-center justify-center text-gray-400">
                地图区域
              </div>
              <div className="mt-6 text-gray-600">
                <p className="mb-2"><strong>配送范围：</strong>全城专车配送，2小时送达</p>
                <p className="mb-2"><strong>配送时间：</strong>08:00 - 22:00</p>
                <p><strong>免费配送：</strong>订单满500元免配送费</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
