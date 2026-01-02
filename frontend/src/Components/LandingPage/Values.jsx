import { motion } from 'framer-motion';



const ValueBlock = ({ title, description, reversed, badge }) => {
    return (
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}  items-center gap-12 md:gap-24 mb-24 last:mb-0`}>

            <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: reversed ? 50 : -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className={`relative group rounded-3xl h-80 w-full flex items-center justify-center border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden bg-white`}>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-black`}></div>

                    <div className={`bg-gray-50 rounded-2xl w-[80%] h-[80%] shadow-inner flex items-center justify-center border border-gray-200 group-hover:scale-105 transition-transform duration-500`}>
                        {reversed ? (
                            <div className="w-full h-full bg-[#342F2F] flex flex-col p-4 rounded-xl">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                </div>
                                <div className="w-full h-2 bg-white/10 rounded-full mb-2"></div>
                                <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
                                <div className="mt-auto flex justify-between">
                                    <div className="w-8 h-8 rounded bg-blue-500/20"></div>
                                    <div className="w-8 h-8 rounded bg-white/5"></div>
                                </div>
                            </div>
                        ) : (
                            <span className={`font-medium opacity-50 text-gray-400`}>UI Preview</span>
                        )}
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: reversed ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-gray-100 text-gray-600`}>
                    {badge}
                </div>
                <h3 className=" Melodrama-Bold text-3xl md:text-4xl font-bold mb-6 text-[#342F2F] leading-tight">
                    {title}
                </h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                    {description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-[#342F2F] font-semibold cursor-pointer group">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
            </motion.div>
        </div>
    );
};


const Values = () => {
    return (
        <section className="py-24 px-4 md:px-12 lg:px-24 relative z-20">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-24"
                >
                    <h2 className="Melodrama-Bold text-4xl md:text-5xl font-bold mb-4 text-[#342F2F]">Why choose us?</h2>
                    <p className="text-xl text-gray-400">Everything you need to boost your productivity.</p>
                </motion.div>

                <ValueBlock
                    title="Centralize your knowledge"
                    description="Stop searching through ten different applications. Everything is synchronized in real-time, keeping your entire team perfectly aligned."
                    badge="Synchronization"
                    reversed={false}
                />

                <ValueBlock
                    title="Analyze your performance"
                    description="Powerful dashboards that provide key metrics to make the right decisions instantly. Track progress, identify bottlenecks, and optimize efficiently."
                    badge="Analytics"
                    reversed={true}
                />

                <ValueBlock
                    title="Collaborate without limits"
                    description="Invite your team, share diagrams with a link, and comment in real-time. The ultimate workspace for modern remote teams."
                    badge="Collaboration"
                    reversed={false}
                />

            </div>
        </section>
    );
}

export default Values;
