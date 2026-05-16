"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UpdateInformationPage() {
  const { data: session, isPending } = useSession();
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  // 1. Pre-fill the form with existing user data once the session loads
  useEffect(() => {
    if (session?.user) {
      setValue("name", session.user.name);
      setValue("image", session.user.image);
    }
  }, [session, setValue]);

  const onUpdateSubmit = async (formData) => {
    const loadingToast = toast.loading("Syncing changes with gallery...");

    try {
      // 2. USE THE v1.x SYNTAX: authClient.updateUser
      const { data, error } = await authClient.updateUser({
        name: formData.name,
        image: formData.image,
      });

      if (error) {
        throw new Error(error.message);
      }

      toast.success("Profile updated successfully!", { id: loadingToast });

      // 3. REFRESH & REDIRECT
      // router.refresh() updates the server components (like the Navbar)
      router.refresh();
      
      // Delay navigation slightly to let the database catch up
      setTimeout(() => {
        router.push("/my-profile");
      }, 800);

    } catch (err) {
      console.error("Update Error:", err);
      toast.error(err.message || "Failed to update profile", { id: loadingToast });
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-[#111112] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl animate__animated animate__zoomIn">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-black text-white tracking-tight">Update Profile</h2>
          <p className="text-slate-500 text-sm mt-2">Refine your architectural identity</p>
        </header>

        <form onSubmit={handleSubmit(onUpdateSubmit)} className="space-y-6">
          {/* Field: Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                Display Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="input bg-white/5 border-white/10 text-white focus:border-primary rounded-xl w-full"
              {...register("name", { required: "Name is required" })}
            />
          </div>

          {/* Field: Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                Profile Image URL
              </span>
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="input bg-white/5 border-white/10 text-white focus:border-primary rounded-xl w-full"
              {...register("image")}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="btn btn-ghost flex-1 rounded-xl text-slate-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary flex-1 rounded-xl font-bold shadow-lg shadow-primary/20"
            >
              Update Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}