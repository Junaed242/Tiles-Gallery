"use client";
import { signUp, signIn } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const { email, password, name, photoUrl } = data;
    
    await signUp.email({
      email,
      password,
      name,
      image: photoUrl, // Photo URL maps to 'image' in BetterAuth
      callbackURL: "/login" // Navigate to login after registration
    }, {
      onSuccess: () => {
        toast.success("Account created! Please login.");
        router.push("/login");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message || "Registration failed");
      }
    });
  };

  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/"
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0B] px-6 py-12">
      <div className="w-full max-w-md bg-[#111112] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Create Account</h2>
        <p className="text-slate-500 text-center mb-8 text-sm">Join the TileGallery community</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <input 
              type="text" placeholder="Full Name" 
              className="input bg-white/5 border-white/10 text-white focus:border-primary"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-error text-xs mt-1">{errors.name.message}</span>}
          </div>

          <div className="form-control">
            <input 
              type="email" placeholder="Email Address" 
              className="input bg-white/5 border-white/10 text-white focus:border-primary"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span className="text-error text-xs mt-1">{errors.email.message}</span>}
          </div>

          <div className="form-control">
            <input 
              type="url" placeholder="Photo URL" 
              className="input bg-white/5 border-white/10 text-white focus:border-primary"
              {...register("photoUrl")}
            />
          </div>

          <div className="form-control">
            <input 
              type="password" placeholder="Password" 
              className="input bg-white/5 border-white/10 text-white focus:border-primary"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 characters" } })}
            />
            {errors.password && <span className="text-error text-xs mt-1">{errors.password.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary w-full rounded-xl mt-4">Register</button>
        </form>

        <div className="divider text-slate-600 text-xs my-6">OR CONTINUE WITH</div>

        <button onClick={handleGoogleLogin} className="btn btn-outline border-white/10 text-white w-full rounded-xl flex gap-2">
          <FaGoogle /> Google
        </button>

        <p className="text-center text-slate-500 text-sm mt-8">
          Already have an account? <Link href="/login" className="text-primary hover:underline font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
}