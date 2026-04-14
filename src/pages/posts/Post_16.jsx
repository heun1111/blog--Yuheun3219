import React from 'react';
import { Link } from 'react-router-dom';

const Post_16 = () => {
  return (
    <article className="pt-20 pb-32 px-8 max-w-7xl mx-auto">
      <header className="mb-24 text-center max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <span className="bg-primary text-white px-6 py-1.5 rounded-full text-xs font-extrabold tracking-[0.2em] uppercase">
            Backend Technical Insight
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-on-surface mb-10 leading-[1.05]">
          Scalable Real-time with Redis & WebSockets
        </h1>
        <p className="text-2xl text-on-surface-variant font-light leading-relaxed max-w-3xl mx-auto">
          Building a reliable pub/sub architecture for thousands of concurrent socket connections.
        </p>
      </header>

      <div className="relative mb-32 rounded-xl overflow-hidden h-[600px] shadow-2xl shadow-primary/5">
        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQkpp1XMYLPQS2TOA_MfFKU2qqY5wrpE-aq54RG67xW0LZueDuPVy6D-bOmFIR-czg_7_kEkV32ABB5urZsH-w6DRmc-upPydC1NVwYUHkbte_PN6Da8QhH1kxzzxIoaDDbkMrx16iZtqzZ8Fry3dGm1-rYK9-R_n64-DcS-kMYrtBW4A2GheTSyl-3rr6phMneWq1ziC2asasCxLUsEmXnNjIj9N38-8vsqoGgOhPOWHfhq4UILIV6po_0tznH_ejkouS4R1QOgGj" alt="Scalable Real-time with Redis & WebSockets" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      <div className="asymmetric-grid">
        <aside className="hidden lg:block col-span-3 sticky top-40 h-fit space-y-16">
          <div>
            <h4 className="text-xs font-black text-primary mb-6 uppercase tracking-[0.25em]">The Author</h4>
            <div className="flex items-center space-x-5">
              <div className="w-16 h-16 rounded-full bg-primary-container p-1 border-2 border-primary/20 flex items-center justify-center font-bold text-primary">
                EV
              </div>
              <div>
                <p className="font-black text-on-surface text-lg">Elena Vance</p>
                <p className="text-sm text-on-surface-variant font-medium">Lead Strategist</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-black text-primary mb-6 uppercase tracking-[0.25em]">Related Topics</h4>
            <ul className="space-y-6 text-base font-semibold text-on-surface">
              <li className="flex items-center space-x-3 group cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                <span className="group-hover:text-primary transition-colors">Distributed Systems</span>
              </li>
              <li className="flex items-center space-x-3 group cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                <span className="group-hover:text-primary transition-colors">Scalability Patterns</span>
              </li>
            </ul>
          </div>
        </aside>

        <div className="col-span-12 lg:col-span-8 lg:col-start-5 space-y-24">
          <section className="space-y-8">
            <h2 className="text-4xl font-extrabold tracking-tight">Overview</h2>
            <p className="text-2xl leading-relaxed text-on-surface-variant">
              Real-time interactivity requires more than just a socket server. For production grade scaling, we need a way to synchronize state across multiple server instances. Redis serves as the perfect backplane for this, enabling reliable broadcasting and state consistency. This allows us to build 'live' ethereal software that pulses with data across the globe.
            </p>
            <p className="text-2xl leading-relaxed text-on-surface-variant">
              This technical deep dive explores the nuances of backend and how it integrates with modern software lifecycles. 
              By utilizing the Ethereal Design principles, we ensure that complex data is presented with clarity and intentionality.
            </p>
          </section>

          <div className="bg-primary text-white rounded-xl p-16 text-center space-y-10 shadow-2xl shadow-primary/30">
            <h2 className="text-4xl font-black tracking-tight">Expand Your Knowledge</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">Download our detailed guide on Scalable Real-time with Redis & WebSockets.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <Link to="/blog" className="bg-white text-primary px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-50 active:scale-95 transition-all inline-block">Back to Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post_16;