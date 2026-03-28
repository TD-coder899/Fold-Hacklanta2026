import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, MessageCircle, History, Dices, LogOut } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/chat", label: "Chat Bot", icon: MessageCircle },
    { path: "/history", label: "History", icon: History },
    { path: "/slot-machine", label: "Coping Tools", icon: Dices },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="bg-red-950 border-b-2" style={{ borderColor: '#6B5010' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#6B5010' }}>
                <Dices className="w-7 h-7" style={{ color: '#B8860B' }} />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-wide" style={{ color: '#B8860B' }}>UrgeTracker</h1>
                <p className="text-xs" style={{ color: '#8B6914' }}>Your CBT Companion</p>
              </div>
            </div>
            <Link
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 bg-red-900 hover:bg-red-800 rounded-lg transition-colors duration-200"
              style={{ color: '#8B6914' }}
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-zinc-900 border-b" style={{ borderColor: '#6B5010' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-6 py-4 transition-all duration-200 border-b-2 ${
                    active
                      ? "bg-red-950"
                      : "hover:bg-zinc-800 border-transparent"
                  }`}
                  style={active ? { color: '#B8860B', borderColor: '#B8860B' } : { color: '#8B6914' }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t mt-12" style={{ borderColor: '#6B5010' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm" style={{ color: '#8B6914' }}>
            © 2026 UrgeTracker - A tool for managing gambling urges through CBT techniques
          </p>
        </div>
      </footer>
    </div>
  );
}