import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductShowcase } from "@/components/product-showcase";
import { FinalCTA } from "@/components/final-cta";

export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-64 pb-32 px-6 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-12 leading-[0.85]">
              Products & <br />
              <span className="text-white/40">Digital Systems.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium">
              A collection of SaaS platforms, operational systems, automation tools, and digital products developed through modern engineering and product-focused design.
            </p>
          </div>
        </div>
      </section>

      <ProductShowcase />

      <FinalCTA />
      <Footer />
    </main>
  );
}
