"use client";
import { signIn } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/" // Navigate to home after login
    }, {
      onSuccess: () => {
        toast.success("Welcome back!");
        router.push("/");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message || "Invalid credentials");
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
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0B] px-6">
      <div className="w-full max-w-md bg-[#111112] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Welcome Back</h2>
        <p className="text-slate-500 text-center mb-8 text-sm">Log in to manage your aesthetic profile</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <input 
              type="email" placeholder="Email" 
              className="input bg-white/5 border-white/10 text-white focus:border-primary"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <div className="form-control">
            <input 
              type="password" placeholder="Password" 
              className="input bg-white/5 border-white/10 text-white focus:border-primary"
              {...register("password", { required: "Password is required" })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full rounded-xl mt-4">Login</button>
        </form>

        <div className="divider text-slate-600 text-xs my-6">OR</div>

        <button onClick={handleGoogleLogin} className="btn btn-outline border-white/10 text-white w-full rounded-xl flex gap-2">
          <FaGoogle /> Sign in with Google
        </button>

        <p className="text-center text-slate-500 text-sm mt-8">
          Don&apos;t have an account? <Link href="/register" className="text-primary hover:underline font-bold">Register</Link>
        </p>
      </div>
    </div>
  );
}