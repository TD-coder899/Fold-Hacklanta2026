import { useState } from "react";
import { useNavigate } from "react-router";
import { Dices, Lock, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with your actual authentication logic
    console.log("Login attempted with:", { email, password });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Casino-themed decorative elements */}
        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center justify-center w-24 h-24 rounded-full shadow-xl mb-4"
            style={{ backgroundColor: '#6B5010' }}
          >
            <Dices className="w-12 h-12" style={{ color: '#B8860B' }} />
          </div>
          <h1 className="text-4xl font-bold tracking-wide mb-2" style={{ color: '#B8860B' }}>UrgeTracker</h1>
          <p style={{ color: '#8B6914' }}>Your CBT Companion for Recovery</p>
        </div>

        {/* Login Card */}
        <div className="bg-red-950 rounded-xl shadow-xl border-2 overflow-hidden" style={{ borderColor: '#6B5010' }}>
          <div className="bg-zinc-900/50 p-8">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#B8860B' }}>Welcome Back</h2>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center space-x-2" style={{ color: '#8B6914' }}>
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-800 text-white placeholder:text-zinc-500"
                  style={{ borderColor: '#6B5010' }}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center space-x-2" style={{ color: '#8B6914' }}>
                  <Lock className="w-4 h-4" />
                  <span>Password</span>
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-zinc-800 text-white placeholder:text-zinc-500"
                  style={{ borderColor: '#6B5010' }}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full text-zinc-950 font-bold py-6 text-lg shadow-lg"
                style={{ backgroundColor: '#8B6914' }}
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button className="text-sm underline" style={{ color: '#B8860B' }}>
                Forgot Password?
              </button>
            </div>

            <div className="mt-8 pt-6 border-t" style={{ borderColor: '#6B5010' }}>
              <p className="text-center text-sm mb-4" style={{ color: '#8B6914' }}>Don't have an account?</p>
              <Button
                type="button"
                variant="outline"
                className="w-full border-2 font-semibold"
                style={{ borderColor: '#8B6914', color: '#B8860B' }}
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm" style={{ color: '#8B6914' }}>
          <p>🎲 Template Mode - Integrate with your authentication system 🎲</p>
        </div>
      </div>
    </div>
  );
}
