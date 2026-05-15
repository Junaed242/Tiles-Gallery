export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center space-y-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-slate-500 text-sm font-medium tracking-widest uppercase animate-pulse">
        Curating Collection...
      </p>
    </div>
  );
}