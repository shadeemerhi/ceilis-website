"use client";

import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const { user } = useCurrentUser();

  if (user) {
    redirect("/admin/reservations");
  }

  return (
    <div className="flex justify-center py-10">
      <div className="flex flex-col gap-6 items-center w-3/4 max-w-[400px] rounded-lg">
        <span className="text-2xl">Admin Sign In</span>
        <button className="flex items-center justify-center rounded-full w-full bg-zinc-100 text-black px-3 py-2 gap-2">
          <FcGoogle size={20} />
          <span
            className="font-semibold text-sm whitespace-nowrap"
            onClick={() => signIn("google")}
          >
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
