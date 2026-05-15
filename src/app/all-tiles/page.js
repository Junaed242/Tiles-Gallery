import AllTilesGallery from "@/components/AllTilesGallery";

async function getAllTiles() {
  const res = await fetch("http://localhost:5000/tiles", { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function AllTilesPage() {
  const tiles = await getAllTiles();

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Dark Header Section */}
      <div className="border-b border-white/5 py-20 px-6 bg-gradient-to-b from-[#111112] to-[#0A0A0B]">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter animate__animated animate__fadeInDown">
            THE <span className="text-primary italic">GALLERY</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto font-light">
            An exclusive collection of premium surfaces for modern architecture.
          </p>
        </div>
      </div>

      <AllTilesGallery initialTiles={tiles} />
    </div>
  );
}