import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Update path as necessary
import "../App.css"; // Assuming CSS is handled in App.css or similar

export default function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <img
        src={logo}
        alt="Loading logo"
        width={150}
        height={150}
        className="animate-pulse"
      />
    </div>
  );
}
