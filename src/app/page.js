import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";

async function getFeaturedTiles() {
  const res = await fetch("http://localhost:5000/tiles", { cache: 'no-store'});
  const data = await res.json();
  return data.slice(0, 4);
}

export default async function Home() {
  const featuredTiles = await getFeaturedTiles();

  return (
    <div className="space-y-12 pb-20">
      {/* 1. Hero Banner */}
      <section className="relative h-125 flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Next.js Optimized Background Image */}
        <Image 
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469" 
          alt="Modern interior with tiles"
          fill
          className="object-cover opacity-40"
        />
        
        <div className="relative z-10 text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold animate__animated animate__fadeInDown">
            Discover Your Perfect Aesthetic
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Explore our premium gallery of hand-picked tiles designed to elevate your space.
          </p>
          <div className="animate__animated animate__zoomIn animate__delay-2s">
            <Link href="/all-tiles" className="btn btn-primary btn-lg">
              Browse Now
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Marquee Section */}
      <div className="bg-primary py-3 text-primary-content font-medium">
        <Marquee gradient={false} speed={50}>
          <span className="mx-10">✨ New Arrivals: Ceramic Blue Tile</span>
          <span className="mx-10">🔥 Weekly Feature: Modern Geometric Patterns</span>
          <span className="mx-10">🌍 Join the Community of Designers</span>
          <span className="mx-10">💎 Premium Marble Collection Out Now</span>
        </Marquee>
      </div>

      {/* 3. Featured Tiles Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Tiles</h2>
            <p className="text-gray-500">Our most popular selections this month</p>
          </div>
          <Link href="/all-tiles" className="link link-primary font-semibold">View All</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTiles.map((tile) => (
            <div key={tile.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border overflow-hidden">
              {/* Image Container with fixed height */}
              <figure className="relative h-48 w-full">
                <Image 
                  src={tile.image} 
                  alt={tile.title} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title text-lg">{tile.title}</h2>
                <p className="text-sm text-gray-500 line-clamp-2">{tile.description}</p>
                <div className="card-actions justify-end mt-4">
                  <Link href={`/tile/${tile.id}`} className="btn btn-outline btn-primary btn-sm w-full">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}