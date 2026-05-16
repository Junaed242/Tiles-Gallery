import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { proxy } from "@/lib/proxy";


export default async function TileDetails({ params }) {
const { id } = await params;
  const tile = await proxy(`/tiles/${id}`);
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  if (!tile.id) return <div className="text-center py-20 text-white">Tile not found</div>;

  return (
    <div className="min-h-screen bg-[#0A0A0B] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/all-tiles" className="text-primary mb-8 inline-block hover:underline">
          ← Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-[#111112] p-8 md:p-12 rounded-[3rem] border border-white/5 animate__animated animate__fadeIn">
          
          {/* Left: Visuals */}
          <div className="relative h-100 md:h-150 w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              src={tile.image} 
              alt={tile.title} 
              fill 
              className="object-cover" 
              priority
            />
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            <div>
               <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{tile.title}</h1>
               <div className="flex gap-2">
                 {tile.tags?.map(tag => (
                   <span key={tag} className="badge badge-primary badge-outline px-4 py-3">{tag}</span>
                 ))}
               </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-400 text-lg leading-relaxed">{tile.description}</p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white/5 p-4 rounded-2xl">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Material</p>
                  <p className="text-white font-medium">{tile.material}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Dimensions</p>
                  <p className="text-white font-medium">{tile.dimensions}</p>
                </div>
              </div>
            </div>

            <div className="divider border-white/5"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">${tile.price}</p>
                <p className="text-xs text-success">{tile.inStock ? "● In Stock" : "○ Out of Stock"}</p>
              </div>
              <button className="btn btn-primary btn-lg rounded-2xl">Inquiry Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}