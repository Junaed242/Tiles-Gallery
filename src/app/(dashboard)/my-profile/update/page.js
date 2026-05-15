"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UpdateInformationPage() {
  const { data: session } = useSession();
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();


  useEffect(() => {
    if (session?.user) {
      setValue("name", session.user.name);
      setValue("image", session.user.image);
    }
  }, [session, setValue]);

  const onUpdate = async (data) => {
    const loadingId = toast.loading("Saving changes...");
    
    try {
      await authClient.user.update({
        name: data.name,
        image: data.image,
      });
      
      toast.success("Information updated!", { id: loadingId });
      router.push("/my-profile");
      router.refresh(); 
    } catch (error) {
      toast.error("Could not update profile", { id: loadingId });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm bg-[#111112] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl animate__animated animate__zoomIn">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Edit Profile</h2>
        <p className="text-slate-500 text-center mb-8 text-sm">Update your public identity</p>
        
        <form onSubmit={handleSubmit(onUpdate)} className="space-y-6">
          {/* Field 1: Name */}
          <div className="form-control">
            <label className="label">
                <span className="label-text text-slate-400 font-bold uppercase text-[10px] tracking-widest">Full Name</span>
            </label>
            <input 
              type="text" 
              placeholder="Your Name"
              className="input bg-white/5 border-white/10 text-white focus:border-primary rounded-xl"
              {...register("name", { required: "Name is required" })}
            />
          </div>

          {/* Field 2: Image URL */}
          <div className="form-control">
            <label className="label">
                <span className="label-text text-slate-400 font-bold uppercase text-[10px] tracking-widest">Profile Photo URL</span>
            </label>
            <input 
              type="url" 
              placeholder="https://..."
              className="input bg-white/5 border-white/10 text-white focus:border-primary rounded-xl"
              {...register("image")}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              type="button" 
              onClick={() => router.back()}
              className="btn btn-ghost flex-1 rounded-xl text-slate-400"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary flex-1 rounded-xl font-bold"
            >
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}