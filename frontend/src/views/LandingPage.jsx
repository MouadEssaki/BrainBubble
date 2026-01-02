// COMPONENTS
import Navbar from "../Components/LandingPage/Navbar";
import Features from "../Components/LandingPage/Features";
import Footer from "../Components/LandingPage/Footer";
import Pricing from "../Components/LandingPage/Pricing";
import FlowContent from "../Components/LandingPage/FlowContent";
import Showcase from "../Components/LandingPage/Shocase";
import Values from "../Components/LandingPage/Values";

// LIBRARIES
import { motion } from "framer-motion";
import { ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';



const LandingPage = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    // Bg-color changed to match the dark section to fill the gaps
    <motion.div className="min-h-screen font-sans text-black overflow-x-hidden bg-[#342F2F]">

      <Navbar />

      <div className="bg-white rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl relative z-30 pb-24 overflow-hidden">

        <section className="w-full h-screen flex flex-col pt-10 mb-0">
          <div className="flex-1 w-full bg-gray-50/30 relative border-b border-gray-100">
            <ReactFlowProvider>
              <FlowContent />
            </ReactFlowProvider>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
          </div>

          <div className="w-full bg-white z-10 py-8 md:py-12 px-6 shrink-0">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-500 mb-6 leading-relaxed font-medium">
                Transform your ideas into stunning visual maps with ease and speed. <br className="hidden md:block" />
                Unleash your creativity today.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full sm:w-auto">
                <button className="btn btn-lg bg-[#342F2F] text-white hover:bg-gray-800 border-none px-8 rounded-full normal-case text-lg h-12 md:h-14 min-h-0 w-full sm:w-auto shadow-xl">
                  Get Started
                </button>
                <button className="btn btn-lg bg-white text-black border border-gray-200 hover:bg-gray-50 px-8 rounded-full normal-case text-lg h-12 md:h-14 min-h-0 w-full sm:w-auto shadow-sm">
                  Learn more
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= SHOWCASES ================= */}
        <Showcase />

        {/* ================= VALUE PROPOSITION ================= */}
        <Values />

      </div>


      {/* ================= FEATURES  ================= */}
      <Features />


      {/* ================= PRICING ================= */}
      <div className="bg-white relative z-30 pt-24 pb-12 -mt-8 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="px-4 md:px-0"
        >
          <Pricing />
        </motion.div>

        {/* --- FOOTER --- */}
        <Footer />
      </div>

    </motion.div>
  );
};

export default LandingPage;