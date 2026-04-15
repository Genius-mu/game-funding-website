import { Menu, X, ChevronDown, Search, ArrowRight } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "How it works",
      href: "/how-it-works",
    },
    {
      label: "Search",
      href: "/search",
    },
    {
      label: "Follow campaign",
      href: "/follow-campaign",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Pixel
              </div>
              <div className="hidden sm:block text-sm font-medium text-slate-600">
                Pledge
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 bg-white/40 backdrop-blur-sm border border-slate-200/80 rounded-full px-2 py-1.5">
                {menuItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-all duration-300 group rounded-full hover:bg-white/60"
                  >
                    <span className="flex items-center gap-1.5">
                      <span>{item.label}</span>
                    </span>

                    {/* Hover underline animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section - Auth & CTA */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Search Icon - Hidden on Mobile */}
              <button className="hidden sm:flex p-2.5 rounded-full hover:bg-slate-100 transition-colors duration-300 text-slate-600 hover:text-slate-900">
                <Search size={20} />
              </button>

              {/* Login Button - Desktop Only */}
              <a
                href="#"
                className="hidden md:flex items-center gap-2 font-medium text-sm text-blue-600 hover:text-white transition-all duration-300 border-2 border-blue-600 px-5 py-2 rounded-full hover:bg-blue-600 group"
              >
                <span>Login</span>
                <ArrowRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </a>

              {/* CTA Button */}
              <button className="hidden sm:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:scale-105">
                Contact us
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X size={24} className="text-slate-900" />
                ) : (
                  <Menu size={24} className="text-slate-900" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-6 border-t border-slate-200/50 animate-in fade-in duration-200 slide-in-from-top-4">
              <div className="space-y-2 mt-4">
                {menuItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium flex-1">{item.label}</span>
                    <ArrowRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                  </a>
                ))}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="space-y-3 mt-6 pt-6 border-t border-slate-200/50">
                <a
                  href="#"
                  className="flex justify-center items-center w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </a>
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
