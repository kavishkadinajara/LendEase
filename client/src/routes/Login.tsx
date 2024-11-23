import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
// import { signIn } from "@/auth";

export default function Login() {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-x-36 p-4 md:p-8 min-h-screen">
      <div className="flex justify-center lg:justify-start w-full md:w-auto">
        <div className="relative mx-auto hidden lg:block">
          <img
            src={register}
            alt="hero"
            className=" md:w-[530px] max-w-xs md:max-w-screen-sm rounded-2xl shadow-2xl shadow-purple-950"
          />
        </div>
      </div>

      <div className="max-w-md w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#090b1c] via-[#070015] to-black shadow-2xl shadow-purple-950 z-50">
        <h2 className="font-bold text-xl text-neutral-200 text-center md:text-left">
          Welcome to LENDEASE
        </h2>
        <p className="text-sm max-w-sm mt-2 text-neutral-300 text-center md:text-left">
          Login to aceternity if you can because we don&apos;t have a login flow yet
        </p>

        <form className="my-8" >
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black to-neutral-600 dark:from-zinc-900 dark:to-zinc-900 block w-full text-white rounded-md mt-8 h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign in &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <button
              className="relative group/btn flex space-x-2 items-center justify-center md:justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
              <span className="text-neutral-300 text-sm">Google</span>
              <BottomGradient />
            </button>
          </div>
        </form>
        <p className="text-sm text-neutral-300 text-center mt-4">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-blue-500">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
