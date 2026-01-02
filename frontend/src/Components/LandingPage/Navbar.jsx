import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { scrollY } = useScroll();

  const width = useTransform(scrollY, [0, 100], ["90%", "30%"]);

  const paddingX = useTransform(scrollY, [0, 100], ["2.5rem", "1.5rem"]);

  return (
    <div className="fixed top-8 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">

      <motion.nav
        style={{
          width,
          paddingLeft: paddingX,
          paddingRight: paddingX
        }}

        className="pointer-events-auto h-16 backdrop-blur-xl bg-[hsla(0,0%,93%,0.72)] border border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.3)] rounded-full flex items-center justify-between relative overflow-hidden transition-all mx-auto max-w-7xl"
      >

        <div className="flex items-center gap-4 relative z-10 cursor-pointer shrink-0">
          <div className="flex flex-col">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
          </div>
        </div>

        <div className="flex items-center gap-6 relative z-10 shrink-0 whitespace-nowrap">

          <div className="h-8 w-px bg-black/10 hidden sm:block"></div>

          <button className="hidden sm:block text-lg text-[#342F2F] font-semibold hover:text-gray-400 transition-colors">
            Pricing
          </button>

          <Link to="/Login">
            <button className="hidden sm:block text-lg text-[#342F2F] font-semibold hover:text-gray-400 transition-colors">
              Login
            </button>
          </Link>


        </div>

      </motion.nav>
    </div>
  );
};

export default Navbar;