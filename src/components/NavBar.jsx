import React, { useEffect, useState, useRef } from 'react'
import OverlayMenu from './OverlayMenu'
import Logo from "../assets/Logo.png"
import { FiMenu } from "react-icons/fi";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setVisible(true);
        return;
      }

      
      setVisible(false);

      // 🧠 Scroll rukte hi → show (debounce)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        setVisible(true);
      }, 200); // 👈 delay adjust kar sakta hai (200–500ms)
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Lokesh
          </div>
        </div>

        {/* Menu Button */}
        <div className="block lg:absolute lg:left-1/2 lg:transform lg:translate-x-1/2">
          {!menuOpen && (
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white text-3xl focus:outline-none"
            >
              <FiMenu />
            </button>
          )}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

export default NavBar;