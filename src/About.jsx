import React from 'react'

const team = [
  { name: 'علي شفقات' },
  { name: 'عبدالله البكر' },
  { name: 'نورة الجماز' },
  { name: 'عبدالحكيم السحيباني' },
  { name: 'فهد المبيريك' },
  { name: 'عبدالإله النغيمش' },
  { name: 'عبدالرحمن القلعي' },
]

const About = () => {
  return (
    <div className="pt-24 pb-12 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900">من نحن</h1>
        <p className="mt-4 text-slate-700 max-w-3xl">
          في جياد المالية نؤمن أن المال وسيلة للنمو، لا غاية له. نمول الشركات التي تستحق، ونمنح المستثمرين فرصًا واضحة ومدروسة بعناية.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">قيمنا</h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-[#224F56]">نحلّل بعمق ونختار بعناية</h3>
            <p className="mt-2 text-slate-700">لا نطرح كل الفرص، بل ما يثبت جدواه. نقيس النجاح بواقعه، لا بوعوده.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-[#224F56]">نلتزم بالموثوقية والشفافية</h3>
            <p className="mt-2 text-slate-700">نضع مصلحة المستثمر والشركة في مقدمة كل قرار.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-[#224F56]">نبتكر لنصنع الأثر</h3>
            <p className="mt-2 text-slate-700">نطوّر حلولًا مالية تواكب التحول الاقتصادي ونبحث عن القيمة قبل العائد.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-[#224F56]">نطبّق مبادئنا قبل قراراتنا</h3>
            <p className="mt-2 text-slate-700">نعمل بما ينسجم مع أحكام الشريعة الإسلامية ونضع الالتزام فوق أي مكسب.</p>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">فريق العمل</h2>
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-[#224F56]/10 mx-auto" />
              <div className="mt-3 font-semibold text-slate-900">{m.name}</div>
              <div className="text-sm text-slate-500">صورة قادمة</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-xl font-bold text-slate-900">نبدأ من مصلحتك</h3>
          <p className="mt-2 text-slate-700">ندرس كل فرصة بعناية ولا نمضي إلا إذا كان يحقق نموًا وربحية حقيقية. مكسبنا لا يسبق مكسبك.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-xl bg-[#224F56] text-white font-semibold">اطلب تمويل</button>
            <button className="px-5 py-3 rounded-xl bg-white text-[#224F56] font-semibold border border-[#224F56]/20">ابدأ الاستثمار</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
