import React from 'react'

const Invest = () => {
  return (
    <div className="pt-24 pb-12 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900">استثمر في تمويل الشركات الواعدة</h1>
        <p className="mt-4 text-slate-700 max-w-3xl">
          استثمر في فرص لشركات واعدة عبر منصة موثوقة تدرس وتحلل هذه الشركات بشكل دقيق، ولا يتم طرح الفرص إلا بعد وضوح جدواها مع الالتزام بأحكام الشريعة الإسلامية.
        </p>
        <div className="mt-6">
          <button className="px-5 py-3 rounded-xl bg-[#224F56] text-white font-semibold">ابدأ الاستثمار</button>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">كيف نقيم الفرصة (Credit Model)</h2>
        <div className="mt-4 grid sm:grid-cols-3 gap-4 text-slate-800">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">استثمار مشترك — لا نحصل على رسومنا إلا بعد توزيع أرباحكم.</div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">شفافية ووضوح — نعرض التفاصيل وأسباب الموافقة بوضوح تام.</div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">فرص مختارة — لا نطرح إلا ما اجتاز التحليل والدراسة الشاملة.</div>
        </div>
      </div>
    </div>
  )
}

export default Invest
