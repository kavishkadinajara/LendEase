import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Registration failed");
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-x-36 p-4 md:p-8">
        <div className="flex justify-center md:justify-start">
          <div className="relative mx-auto hidden lg:block">
            <img
              src={"../assets/register.png"}
              alt="hero"
              className="max-w-full md:max-w-screen-sm z-10 fade-edges mx-auto w-full md:w-[480px] rounded-2xl shadow-2xl shadow-purple-950"
            />
          </div>
        </div>

        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#090b1c] via-[#070015] to-black z-50 shadow-2xl shadow-purple-950">
          <h2 className="font-bold text-xl text-neutral-200 text-center">
            Welcome to LENDEASE
          </h2>
          <p className="text-sm max-w-sm mt-2 text-neutral-300 text-center md:text-left">
            Login to aceternity if you can because we don&apos;t have a login flow yet
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="name">First name</Label>
                <Input
                  id="name"
                  placeholder="Tyler"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Sign up →"}
              <BottomGradient />
            </button>

            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <button
                className="relative group/btn flex space-x-2 items-center justify-center md:justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="button"
                onClick={() => alert("Google signup coming soon!")}
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
                <span className="text-neutral-300 text-sm">
                  Google
                </span>
                <BottomGradient />
              </button>
            </div>
          </form>
          <p className="text-sm text-neutral-300 text-center mt-4">
            Already registered? <a href="/login" className="text-blue-500">Login here</a>
          </p>
        </div>
      </div>
    </>
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
