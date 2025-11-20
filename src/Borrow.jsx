import React from 'react'

const Borrow = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900">تمويل يفيدك قبل يفيدنا</h1>
        <p className="mt-4 text-slate-700 max-w-3xl">
          في جياد المالية، مصلحتك قبل التمويل. نموّل فقط عندما يكون التمويل في صالح مشروعك ويعزز ربحيته.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-xl p-6">
          <div className="text-slate-900 font-semibold">اطلب تمويل واحصل على عرض خلال 3 أيام</div>
          <div className="mt-3 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-xl bg-[#224F56] text-white font-semibold">اطلب تمويل</button>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">شروط الأهلية</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-xl p-6">بيانات مالية حديثة — قوائم مالية مدققة للعامين الماضيين</div>
          <div className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-xl p-6">سجل تجاري نشط — ساري وغير مجمد</div>
          <div className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-xl p-6">الحد الأدنى للتمويل — لا يقل عن 500,000 ريال</div>
          <div className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-xl p-6">هوية المالك/المخوّل — سارية المفعول</div>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">نموذج طلب التمويل</h2>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-xl p-6">
          <div className="text-slate-500">نموذج تقديم قادم</div>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">مراحل دراسة التمويل</h2>
        <ol className="mt-4 space-y-3 text-slate-800 list-decimal list-inside">
          <li>تقديم الطلب — تعبئة النموذج وإرسال المستندات</li>
          <li>المراجعة الأولية — 2-3 أيام عمل</li>
          <li>التقييم المفصل — 5-7 أيام عمل</li>
          <li>العرض التمويلي — بعد استيفاء الشروط واجتياز الدراسة</li>
        </ol>
      </div>
    </div>
  )
}

export default Borrow
