import React, { useState } from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { useEduVenture } from "../../context/EduVentureContext";
import {
  Home,
  BookOpen,
  Trophy,
  Rocket,
  User,
  Menu,
  X,
  LogOut
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MainLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { state, logout } = useEduVenture();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: BookOpen, label: "Learning", path: "/secondary" },
    { icon: Rocket, label: "AI Tutor", path: "/ai-tutor" },
    { icon: Trophy, label: "Competitive", path: "/competitive-exams" },
    { icon: User, label: "Career", path: "/career-roadmap" },
  ];

  const isActive = (path: string) => location.pathname === path;


  // Protect the route
  React.useEffect(() => {
    if (!state.isLoggedIn) {
      navigate('/login');
    }
  }, [state.isLoggedIn, navigate]);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200">
        <div className="p-6 border-b border-slate-100 text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            EduVenture
          </h1>
          <p className="text-xs text-slate-500 mt-1">Learn • Play • Grow</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive(item.path)
                ? "bg-indigo-50 text-indigo-600 font-semibold"
                : "text-slate-600 hover:bg-slate-100"
                }`}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* User Card */}
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
              G
            </div>
            <div>
              <p className="text-xs text-slate-500">XP: 420 • Level 5</p>
            </div>
            <button
              onClick={logout}
              className="ml-auto p-2 text-slate-400 hover:text-red-500 transition-colors"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </aside>

      {/* ===== Mobile Layout ===== */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="md:hidden h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4">
          <h1 className="text-xl font-bold text-indigo-600">EduVenture</h1>
          <button onClick={() => setIsOpen(true)}>
            <Menu />
          </button>
        </header>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-xl"
            >
              <div className="p-4 flex justify-between items-center border-b">
                <span className="font-bold text-indigo-600">Menu</span>
                <button onClick={() => setIsOpen(false)}>
                  <X />
                </button>
              </div>

              <nav className="p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg ${isActive(item.path)
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-600 hover:bg-slate-100"
                      }`}
                  >
                    <item.icon size={20} />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* ===== Page Content ===== */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
