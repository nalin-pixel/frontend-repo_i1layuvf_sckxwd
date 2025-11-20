import React from 'react'

const LegalSharia = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 p-8 bg-white">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">الشرعية والترخيص</h2>
              <p className="mt-3 text-slate-700">نلتزم في جياد المالية بأحكام الشريعة الإسلامية، وتخضع جميع منتجاتنا لمراجعة لجنة شرعية مستقلة.</p>
              <p className="mt-2 text-slate-700">جياد المالية مرخصة من هيئة السوق المالية لممارسة أنشطة الترتيب.</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <button className="rounded-xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition">الشهادة الشرعية</button>
                <button className="rounded-xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition">إعلان الترخيص</button>
                <div className="rounded-xl border border-slate-200 bg-white p-4">مراجعة شرعية سنوية</div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">إطار حماية المستثمر</div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white h-56 flex items-center justify-center text-slate-500">
              سيتم إتاحة الشهادات قريبًا
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegalSharia
