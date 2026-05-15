import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* About Hero */}
      <section className="pt-64 pb-32 px-6 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-12 leading-[0.85]">
              Modern Software Engineering <br />
              <span className="text-white/40">With Product Thinking.</span>
            </h1>
            <div className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium space-y-8">
              <p>
                Integral Studio develops scalable SaaS platforms, automation systems, AI-powered tools, and premium digital products focused on usability, engineering quality, and long-term scalability.
              </p>
              <p>
                As a division of Integral Group, the studio supports both internal ecosystem products and external digital platforms for startups and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Our Philosophy</h2>
            <p className="text-white/40 text-lg leading-relaxed max-w-md">
              We believe modern software products should feel intuitive, scalable, maintainable, and operationally efficient.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Intuitive", desc: "User-centric design focused on clarity." },
              { title: "Scalable", desc: "Architecture built for compounding load." },
              { title: "Maintainable", desc: "Clean, documented code for long-term health." },
              { title: "Efficient", desc: "Streamlined workflows for operational speed." },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-3xl glass-dark border border-white/5">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold text-white mb-24 text-center">Our Approach</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
            {["Product Strategy", "Engineering Systems", "Frontend Architecture", "Automation", "Modern UX Thinking"].map((item) => (
              <div key={item} className="space-y-4">
                <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20">Focus</div>
                <div className="text-lg font-bold text-white">{item}</div>
              </div>
            ))}
          </div>
          <div className="mt-32 text-center">
            <p className="text-white/40 text-2xl font-medium max-w-4xl mx-auto italic">
              "The result is software designed not only to launch — but to scale sustainably."
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
