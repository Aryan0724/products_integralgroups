import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-64 pb-48 px-6 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-12 leading-[0.85]">
              Let’s Build <br />
              <span className="text-white/40">Something Scalable.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium max-w-xl">
              Whether you're building a SaaS platform, automation system, AI product, or operational software — Integral Studio helps transform ideas into scalable digital systems.
            </p>
          </div>

          <div className="glass-dark border border-white/5 p-12 rounded-[3rem]">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 ml-4">Full Name</label>
                  <input type="text" className="w-full h-16 bg-white/5 border border-white/5 rounded-2xl px-6 text-white focus:outline-none focus:border-white/20 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 ml-4">Email Address</label>
                  <input type="email" className="w-full h-16 bg-white/5 border border-white/5 rounded-2xl px-6 text-white focus:outline-none focus:border-white/20 transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 ml-4">Company / Startup</label>
                  <input type="text" className="w-full h-16 bg-white/5 border border-white/5 rounded-2xl px-6 text-white focus:outline-none focus:border-white/20 transition-colors" placeholder="Integral Group" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 ml-4">Product Type</label>
                  <select className="w-full h-16 bg-white/5 border border-white/5 rounded-2xl px-6 text-white focus:outline-none focus:border-white/20 transition-colors appearance-none">
                    <option className="bg-black">SaaS Platform</option>
                    <option className="bg-black">AI Product</option>
                    <option className="bg-black">Automation System</option>
                    <option className="bg-black">Internal Tool</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 ml-4">Project Details</label>
                <textarea className="w-full h-48 bg-white/5 border border-white/5 rounded-2xl p-6 text-white focus:outline-none focus:border-white/20 transition-colors resize-none" placeholder="Tell us about your project goals and technical requirements..." />
              </div>
              <Button size="lg" className="w-full h-20 rounded-2xl bg-white text-black font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
