import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";

const Pricing = () => {


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
        <section className="py-24 bg-transparent px-6 relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="text-4xl font-bold mb-4">Plans tarifaires simples</h2>
                    <p className="text-gray-500 text-lg">Commencez gratuitement, évoluez quand vous en avez besoin.</p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold mb-2">Starter</h3>
                        <p className="text-4xl font-bold mb-6">$0<span className="text-base font-normal text-gray-500">/mo</span></p>
                        <ul className="space-y-3 mb-8 text-gray-600">
                            <li className="flex items-center"><CheckIcon /> 1 utilisateur</li>
                            <li className="flex items-center"><CheckIcon /> 5 projets</li>
                            <li className="flex items-center"><CheckIcon /> Support communautaire</li>
                        </ul>
                        <button className="w-full btn bg-gray-50 hover:bg-gray-100 text-black border-none normal-case rounded-xl">Commencer</button>
                    </motion.div>

                    <motion.div variants={fadeUp} className="bg-[#342F2F] text-white p-8 rounded-2xl shadow-xl relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-bold">POPULAIRE</div>
                        <h3 className="text-xl font-bold mb-2">Pro</h3>
                        <p className="text-4xl font-bold mb-6">$29<span className="text-base font-normal text-gray-400">/mo</span></p>
                        <ul className="space-y-3 mb-8 text-gray-300">
                            <li className="flex items-center"><CheckIcon /> Jusqu'à 5 utilisateurs</li>
                            <li className="flex items-center"><CheckIcon /> Projets illimités</li>
                            <li className="flex items-center"><CheckIcon /> Analytics avancés</li>
                            <li className="flex items-center"><CheckIcon /> Support prioritaire</li>
                        </ul>
                        <button className="w-full btn bg-white text-black hover:bg-gray-100 border-none normal-case font-bold rounded-xl">Essayer Pro</button>
                    </motion.div>

                    <motion.div variants={fadeUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                        <p className="text-4xl font-bold mb-6">Custom</p>
                        <ul className="space-y-3 mb-8 text-gray-600">
                            <li className="flex items-center"><CheckIcon /> Utilisateurs illimités</li>
                            <li className="flex items-center"><CheckIcon /> Sécurité avancée (SSO)</li>
                            <li className="flex items-center"><CheckIcon /> CSM dédié</li>
                        </ul>
                        <button className="w-full btn bg-gray-50 hover:bg-gray-100 text-black border-none normal-case rounded-xl">Contacter</button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Pricing;
