"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function AllTilesGallery({ initialTiles }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTiles = initialTiles.filter((tile) =>
    tile.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Dark Glassmorphism Search Bar */}
      <div className="flex justify-center mb-20 animate__animated animate__fadeInUp">
        <div className="relative w-full max-w-2xl group">
          <span className="absolute inset-y-0 left-0 pl-6 flex items-center text-slate-500 group-focus-within:text-primary transition-colors">
            <FaSearch className="text-xl" />
          </span>
          <input
            type="text"
            placeholder="Search the collection..."
            className="w-full pl-16 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl focus:border-primary/50 focus:bg-white/10 outline-none transition-all text-white text-lg placeholder:text-slate-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Dark Modern Grid */}
      {filteredTiles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTiles.map((tile) => (
            <div 
              key={tile.id} 
              className="group bg-[#111112] rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-700 animate__animated animate__fadeIn"
            >
              {/* Image with Dark Overlay on Hover */}
              <figure className="relative h-80 w-full overflow-hidden">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-5 right-5">
                   <span className="bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white border border-white/10">
                    {tile.category}
                  </span>
                </div>
              </figure>

              <div className="p-10">
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {tile.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-light">
                  {tile.description}
                </p>
                
                <div className="mt-10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Price</p>
                    <p className="text-3xl font-light text-white leading-none">${tile.price}</p>
                  </div>
                  <Link 
                    href={`/tile/${tile.id}`} 
                    className="btn btn-primary rounded-full px-10 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
          <h3 className="text-2xl font-light text-slate-500 italic">No tiles matching &quot;{searchTerm}&quot;</h3>
          <button onClick={() => setSearchTerm("")} className="mt-4 text-primary hover:text-white transition-colors">
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
}