import { motion } from "framer-motion";
import {
    Zap,
    BrainCircuit,
    Sparkles,
    Wand2,
} from "lucide-react";

const featuresData = [
    {
        id: 1,
        title: "AI Quick Think",
        description: "Dump your raw thoughts in bulk. Our AI analyzes, extracts key concepts, and generates a structured graph instantly.",
        icon: Zap,
        isPremium: true,
        gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
        id: 2,
        title: "Semantic Clustering",
        description: "Intelligent sorting. The engine analyzes scattered nodes and groups them by thematic similarity using vector embeddings.",
        icon: BrainCircuit,
        isPremium: true,
        gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: 3,
        title: "One-Shot Board",
        description: "Describe a project (e.g., 'Fitness App Plan') and watch the AI generate categories, sub-categories, and logical steps.",
        icon: Wand2,
        isPremium: true,
        gradient: "from-orange-500/20 to-red-500/20"
    },
];

const FeatureCard = ({ feature, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col h-full"
        >
            <div className={`
                relative h-full overflow-hidden rounded-4xl border border-white/5 
                bg-white/5 backdrop-blur-sm p-8 transition-all duration-300
                hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2
            `}>

                <div className={`
                    absolute inset-0 bg-linear-to-br ${feature.gradient} 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out
                `} />

                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                        <div className="
                            w-14 h-14 rounded-2xl flex items-center justify-center 
                            bg-[#342F2F] shadow-lg border border-white/10 text-white
                            group-hover:scale-110 transition-transform duration-300
                        ">
                            <feature.icon size={26} strokeWidth={1.5} />
                        </div>

                        {feature.isPremium && (
                            <div className="
                                flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                                bg-white/10 border border-white/5 backdrop-blur-md
                                text-white text-[10px] font-bold tracking-widest uppercase shadow-sm
                            ">
                                <Sparkles size={10} className="text-purple-400" fill="currentColor" />
                                PRO AI
                            </div>
                        )}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                        {feature.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-base">
                        {feature.description}
                    </p>

                    <div className="mt-auto pt-8">
                        <div className="flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                            <span>Discover feature</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Features = () => {
    return (
        <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#342F2F]">


            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className=" Melodrama-Bold text-4xl md:text-5xl mb-6 text-white tracking-tight">
                        Supercharge your brain  <br />
                        <span>with </span>
                        <span className=" Melodrama-Regular text-transparent bg-clip-text bg-[#ded5cd]">
                            Artificial Intelligence
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        From infinite canvases to semantic clustering, we provide the tools to structure chaos into clarity.
                    </p>
                </motion.div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <FeatureCard key={feature.id} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;