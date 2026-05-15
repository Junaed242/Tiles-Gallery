import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function MyProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If not logged in, redirect to login
  if (!session) {
    redirect("/login");
  }

  const { user } = session;

  return (
    <div className="min-h-screen bg-[#0A0A0B] py-20 px-6">
      <div className="max-w-2xl mx-auto bg-[#111112] border border-white/5 rounded-[3rem] p-12 text-center shadow-2xl animate__animated animate__fadeInUp">
        
        {/* Avatar Section */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <Image
              src={user.image || `https://ui-avatars.com/api/?name=${user.name}&background=random`}
              alt={user.name}
              fill
              className="rounded-full object-cover ring-4 ring-primary ring-offset-4 ring-offset-[#111112] shadow-2xl shadow-primary/20"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-white tracking-tight">
            {user.name}
          </h1>
          <p className="text-slate-500 font-medium">{user.email}</p>
        </div>

        <div className="divider border-white/5 my-10"></div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/my-profile/update" 
            className="btn btn-primary px-10 rounded-2xl font-bold shadow-lg shadow-primary/30"
          >
            Update Information
          </Link>
          <Link 
            href="/all-tiles" 
            className="btn btn-outline border-white/10 text-white px-10 rounded-2xl hover:bg-white/5"
          >
            Back to Gallery
          </Link>
        </div>


        <div className="grid grid-cols-3 gap-4 mt-12 pt-10 border-t border-white/5">
            <div>
                <p className="text-white font-bold">12</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Saved</p>
            </div>
            <div>
                <p className="text-white font-bold">Member</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Status</p>
            </div>
            <div>
                <p className="text-white font-bold">Pro</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Plan</p>
            </div>
        </div>
      </div>
    </div>
  );
}