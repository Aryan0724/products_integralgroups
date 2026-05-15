import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProcessTimeline } from "@/components/process-timeline";
import { FinalCTA } from "@/components/final-cta";

export default function ProcessPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-64 pb-32 px-6 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-12 leading-[0.85]">
              Structured Product <br />
              <span className="text-white/40">Development.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium">
              Every product at Integral Studio is developed through a structured process focused on usability, scalability, engineering quality, and long-term maintainability.
            </p>
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <FinalCTA />
      <Footer />
    </main>
  );
}
