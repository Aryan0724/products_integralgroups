import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 pt-32 px-6">
          <div className="max-w-[1400px] mx-auto">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
