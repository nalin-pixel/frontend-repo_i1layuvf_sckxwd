import React from 'react'

const partners = [
  { name: 'CreditSafe', logo: 'https://dummyimage.com/120x36/224F56/fff&text=CreditSafe' },
  { name: 'FraudShield', logo: 'https://dummyimage.com/120x36/224F56/fff&text=FraudShield' },
  { name: 'OpenBanking', logo: 'https://dummyimage.com/120x36/224F56/fff&text=OpenBanking' },
  { name: 'DataBridge', logo: 'https://dummyimage.com/120x36/224F56/fff&text=DataBridge' },
]

const Partners = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Data sources and partnerships</h2>
        <p className="mt-2 text-slate-600">We integrate with leading providers for credit information, KYC, and fraud prevention.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {partners.map(p => (
            <div key={p.name} className="rounded-xl border border-slate-200/70 bg-white/60 backdrop-blur-xl p-4 flex items-center justify-center">
              <img src={p.logo} alt={p.name} className="opacity-90" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
