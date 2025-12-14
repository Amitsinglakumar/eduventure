import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEduVenture } from "../../context/EduVentureContext";
import { Rocket, User } from "lucide-react";

const generateUsername = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let name = "guest_";
  for (let i = 0; i < 6; i++) {
    name += letters[Math.floor(Math.random() * letters.length)];
  }
  return name;
};

const generatePassword = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const GuestLogin: React.FC = () => {
  const navigate = useNavigate();
  const { loginAsGuest } = useEduVenture();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // If already logged in, redirect to dashboard immediately
    const savedUser = localStorage.getItem('eduventure_user');
    if (savedUser) {
      navigate('/dashboard');
    }
    setUsername(generateUsername());
    setPassword(generatePassword());
  }, [navigate]);

  const handleGuestLogin = async () => {
    try {
      setLoading(true);
      // Pass only the username as the name parameter
      await loginAsGuest(username);
      // Navigate to dashboard after successful login
      navigate("/dashboard");
    } catch (err) {
      setError("Unable to start session. Please refresh.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-violet-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">

        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
            <Rocket size={28} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to EduVenture
          </h1>
          <p className="text-gray-500 mt-2">
            Learn • Play • Level Up 🚀
          </p>
        </div>

        {/* Credentials */}
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-gray-100 rounded-xl">
            <p className="text-xs text-gray-500">Username</p>
            <p className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <User size={16} />
              {username}
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl">
            <p className="text-xs text-gray-500">4-Digit Password</p>
            <p className="text-lg font-semibold tracking-widest text-gray-800">
              {password}
            </p>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="mt-4 text-sm text-red-600 text-center">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleGuestLogin}
          disabled={loading}
          className="w-full mt-6 py-3 text-white font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Starting Adventure..." : "Enter as Guest"}
        </button>

        <p className="mt-6 text-xs text-center text-gray-400">
          Guest session resets on logout
        </p>
      </div>
    </div>
  );
};

export default GuestLogin;
