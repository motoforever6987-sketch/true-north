export default function TrueNorthSystemsWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="border-b border-white/10 backdrop-blur">
        <div className="mx-auto max-w-7xl flex justify-between items-center px-6 py-5">
          <div className="text-lg font-semibold tracking-wide">True North Systems</div>

          <div className="flex items-center gap-6">
            
            <a href="#contact" className="bg-white text-slate-950 px-5 py-3 rounded-2xl font-semibold shadow">
              Start Now
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 grid md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Stop losing leads from missed calls and slow follow-ups.
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Back-end solutions for front-end problems. We build systems that help you respond faster, save time, and convert more of the leads you already get.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="bg-white text-slate-950 px-6 py-4 rounded-2xl font-semibold shadow">
                Start Now
              </a>
              <a href="#contact" className="border border-white/15 px-6 py-4 rounded-2xl">
                Book a Call
              </a>
            </div>

            <div className="mt-10">
              <div className="text-4xl font-semibold mb-6">What we do</div>
              <div className="grid grid-cols-3 gap-4 max-w-md">
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-xl font-semibold">Fast</div>
                  <div className="text-sm text-slate-400">Responses</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-xl font-semibold">More</div>
                  <div className="text-sm text-slate-400">Bookings</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-xl font-semibold">Clean</div>
                  <div className="text-sm text-slate-400">Workflows</div>
                </div>
              </div>
            </div>

          </div>

          {/* LIVE WORKFLOW */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl">
              <div className="bg-slate-900 rounded-2xl p-5 space-y-3">
                <div className="text-sm text-slate-400">Live workflow</div>

                <div className="bg-slate-950 p-4 rounded-xl">Missed call from potential client</div>
                <div className="bg-blue-500 text-white p-4 rounded-xl ml-auto w-fit">Instant text sent</div>
                <div className="bg-slate-950 p-4 rounded-xl">Client responds with request</div>
                <div className="bg-green-500 text-white p-4 rounded-xl ml-auto w-fit">Booked into calendar</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-semibold">What we improve</h2>
        <p className="mt-4 text-slate-300 max-w-2xl">
          Clear systems that handle leads properly so you stop missing opportunities and wasting time.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="text-xl font-semibold">Lead Retention</div>
            <div className="text-sm text-slate-400 mt-2">
              Every inbound lead is captured and stored so nothing gets lost.
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="text-xl font-semibold">Instant Follow-Ups</div>
            <div className="text-sm text-slate-400 mt-2">
              Leads get responses immediately instead of waiting hours.
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="text-xl font-semibold">Client Request Intake</div>
            <div className="text-sm text-slate-400 mt-2">
              We capture details, deadlines, and client needs before you ever speak to them.
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="text-xl font-semibold">Booking Systems</div>
            <div className="text-sm text-slate-400 mt-2">
              Qualified leads move directly into your calendar.
            </div>
          </div>

        </div>
      </section>

      {/* HOW */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-semibold">How you start</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center gap-4">
            <svg width="40" height="40" fill="none" stroke="white" strokeWidth="1.5"><rect x="5" y="5" width="30" height="30" rx="6"/><path d="M10 14h20M10 20h20M10 26h12"/></svg>
            <div>Fill out the form</div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center gap-4">
            <svg width="40" height="40" fill="none" stroke="white" strokeWidth="2"><path d="M10 20l6 6 14-14"/></svg>
            <div>We map your workflow</div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center gap-4">
            <svg width="40" height="40" fill="none" stroke="white" strokeWidth="1.5"><path d="M10 30h20M15 30v-8h10v8M12 22l8-6 8 6"/></svg>
            <div>We build your system</div>
          </div>

        </div>
      </section>

      {/* FORM */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-4xl font-semibold mb-6">Start now</h2>

        <form className="grid gap-4 max-w-xl">
          <input className="p-4 bg-slate-900 border border-white/10 rounded-2xl" placeholder="Name" />
          <input className="p-4 bg-slate-900 border border-white/10 rounded-2xl" placeholder="Business" />
          <input className="p-4 bg-slate-900 border border-white/10 rounded-2xl" placeholder="Phone or email" />
          <textarea className="p-4 bg-slate-900 border border-white/10 rounded-2xl" placeholder="What kind of leads do you get?" />
          <button className="bg-white text-slate-950 p-4 rounded-2xl font-semibold">
            Submit
          </button>
        </form>
      </section>

      {/* CHAT */}
      <div className="fixed bottom-6 right-6 bg-white text-black px-4 py-3 rounded-xl shadow-lg">
        Chat
      </div>

    </div>
  );
}
