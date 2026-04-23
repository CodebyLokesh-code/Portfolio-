import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

function OverlayMenu({ isOpen, onClose }) {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 1024;

  const origin = isMobile ? "90% 8%" : "50% 8%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[9999]"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-4xl hover:rotate-90 transition duration-300"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          {/* MENU */}
          <motion.ul
            className="space-y-6 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="relative text-3xl text-white font-semibold group transition"
                >
                  {item}

                  {/* underline animation */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default OverlayMenu;