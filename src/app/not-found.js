import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <h1 className="text-[15rem] md:text-[25rem] font-black text-white/2 absolute select-none pointer-events-none">
        404
      </h1>

      <div className="relative z-10 space-y-6 animate__animated animate__fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Lost in the <span className="text-primary italic">Gallery?</span>
        </h2>
        <p className="text-slate-500 max-w-sm mx-auto font-light text-lg">
          The architectural surface you are looking for doesn&apos;t exist or
          has been moved to another collection.
        </p>

        <div className="pt-6">
          <Link
            href="/"
            className="btn btn-primary rounded-full px-12 h-14 shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
          >
            Return to Home
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 text-[10px] text-slate-700 uppercase tracking-[0.3em] font-bold">
        <span>Aesthetic</span>
        <span>•</span>
        <span>Precision</span>
        <span>•</span>
        <span>Quality</span>
      </div>
    </div>
  );
}
