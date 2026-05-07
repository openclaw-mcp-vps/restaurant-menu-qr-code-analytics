export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Restaurant Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know What Your Guests
          <span className="text-[#58a6ff]"> Actually Look At</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Generate QR codes for your menu and get real-time analytics on scan frequency, peak dining hours, and the items guests view most — all in one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial — $9/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["QR Code Generator", "Scan Heatmaps", "Peak Time Tracking", "Popular Item Reports", "Multi-location Support"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-[#21262d] bg-[#161b22]">
        <div className="max-w-3xl mx-auto px-6 py-8 grid grid-cols-3 gap-6 text-center">
          {[
            { value: "2 min", label: "Setup time" },
            { value: "98%", label: "Scan accuracy" },
            { value: "24/7", label: "Live dashboard" }
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-[#58a6ff]">{s.value}</p>
              <p className="text-sm text-[#8b949e] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple, Honest Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#484f58] mb-6">per location</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited QR codes",
              "Real-time scan analytics",
              "Peak hour heatmaps",
              "Most-viewed item reports",
              "CSV data export",
              "Email digest reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the QR code work?",
              a: "You generate a QR code linked to your menu URL. Every scan is logged with timestamp, device type, and which menu sections were viewed — no app needed for your guests."
            },
            {
              q: "Do my guests need to install anything?",
              a: "No. Guests scan the QR code with their phone camera and your menu opens instantly in the browser. All tracking happens invisibly in the background."
            },
            {
              q: "Can I use this for multiple locations?",
              a: "Yes. Each location gets its own QR code and analytics dashboard. The $9/mo plan covers one location; add more locations at the same rate."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} MenuScan. All rights reserved.
      </footer>
    </main>
  )
}
