import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


const Shocase = () => {

    const showcaseRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: showcaseRef,
        offset: ["start end", "end start"]
    });


    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

    return (
        <motion.section
            ref={showcaseRef}
            className="py-50 px-4 md:px-12 lg:px-24 min-h-screen flex items-center justify-center perspective-1000 overflow-hidden"
        >
            <div className="max-w-7xl w-full mx-auto relative z-10">

                <motion.div
                    className="text-center mb-12"
                >
                    <h2 className="Melodrama-Bold text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#342F2F] to-gray-600">
                        Preview of the Dashboard
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg">
                        Visualize your data like never before with our intuitive dashboard.
                    </p>
                </motion.div>

                <motion.div
                    style={{
                        scale,
                        rotateX,
                        y,
                        opacity
                    }}
                    className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.5)] border border-white/10 bg-[#342F2F] backdrop-blur-xl"
                >
                    <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-20">
                        <div className="w-3 h-3 rounded-full bg-[#342F2F] border border-white/10"></div>
                        <div className="w-3 h-3 rounded-full bg-[#342F2F] border border-white/10"></div>
                        <div className="w-3 h-3 rounded-full bg-[#342F2F] border border-white/10"></div>
                        <div className="ml-4 px-3 py-1 rounded-full bg-white/5 text-[10px] text-gray-400 font-mono">Synapse</div>
                    </div>

                    <div className="w-full h-full flex flex-col items-center justify-center relative">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                        <span className="text-white/30 font-bold text-4xl tracking-widest uppercase z-10">Dashboard Preview</span>

                        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                </motion.div>
            </div>
        </motion.section>
    );
}

export default Shocase;
