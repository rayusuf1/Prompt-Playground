import { Link, useLocation } from "wouter";
import { Brain, Home, Info, User } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Brain className="text-white text-sm w-4 h-4" />
            </div>
            <span className="text-lg font-semibold text-foreground">Prompt Playground</span>
          </Link>
          <div className="flex space-x-6">
            <Link
              href="/"
              className={`nav-link px-3 py-2 text-sm font-medium rounded-lg flex items-center space-x-2 transition-all hover:bg-muted ${
                isActive("/") ? "bg-muted text-primary" : "text-foreground hover:text-primary"
              }`}
              data-testid="nav-home"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/about"
              className={`nav-link px-3 py-2 text-sm font-medium rounded-lg flex items-center space-x-2 transition-all hover:bg-muted ${
                isActive("/about") ? "bg-muted text-primary" : "text-foreground hover:text-primary"
              }`}
              data-testid="nav-about"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link
              href="/creator"
              className={`nav-link px-3 py-2 text-sm font-medium rounded-lg flex items-center space-x-2 transition-all hover:bg-muted ${
                isActive("/creator") ? "bg-muted text-primary" : "text-foreground hover:text-primary"
              }`}
              data-testid="nav-creator"
            >
              <User className="w-4 h-4" />
              <span>Meet the Creator</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
