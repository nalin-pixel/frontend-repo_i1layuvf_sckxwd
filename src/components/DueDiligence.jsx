import React from 'react'

const DueDiligence = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 p-8 bg-white">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">شفافية كاملة في التقييم</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            نموذج التقييم الائتماني - كيف نقيم الشركات قبل طرحها
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-800">
            <div className="rounded-xl border border-slate-200 bg-white p-4">25% فريق الإدارة</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">25% نموذج العمل</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">20% السوق والنمو</div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">30% الأداء المالي</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DueDiligence
