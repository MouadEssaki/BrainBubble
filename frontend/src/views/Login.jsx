import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
    return (
        <div className="flex h-screen w-full font-sans overflow-hidden bg-[#ded5cd]">

            <div className="w-full lg:w-[55%] flex flex-col justify-center px-8 md:px-16 lg:px-24 relative z-20 bg-[#141414] lg:rounded-r-[3rem] shadow-[35px_0_60px_-15px_rgba(0,0,0,0.5)]">
                <div className="w-full h-full overflow-y-auto flex flex-col justify-center no-scrollbar">

                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        href="/"
                        className="absolute top-8 left-8 md:left-16 flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                    >
                        <ArrowLeft size={16} />
                        Back
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-md w-full mx-auto py-12"
                    >
                        <div className="item-center mb-8 text-center justify-center">
                            <h1 className="text-4xl font-bold text-white tracking-tight">Welcome back</h1>
                            <p className="text-gray-300 mt-2">Please enter your credentials to continue.</p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-1.5">Email</label>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-[#ded5cd] focus:ring-1 focus:ring-[#ded5cd] outline-none transition-all bg-white/5 text-white placeholder-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-1.5">Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-[#ded5cd] focus:ring-1 focus:ring-[#ded5cd] outline-none transition-all bg-white/5 text-white placeholder-gray-500"
                                />
                                <div className="flex justify-end mt-2">
                                    <a href="#" className="text-xs font-medium text-gray-300 hover:text-white">Forgot password?</a>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                className="w-full bg-white text-[#342F2F] font-bold py-3.5 rounded-lg hover:bg-white transition-colors shadow-lg hover:shadow-xl"
                            >
                                Sign In
                            </motion.button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/10"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-[#141414] px-2 text-white">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-white/20 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium text-white">
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-white/20 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium text-white">
                                GitHub
                            </button>
                        </div>

                        <p className="text-center text-sm text-gray-400">
                            Don't have an account yet? <a href="#" className="font-semibold text-white hover:underline">Sign Up</a>
                        </p>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="hidden lg:block lg:w-[50%] relative h-full bg-[#ded5cd] z-10 -ml-[5%]"
            >
                <ShaderGradientCanvas
                    pointerEvents="none"
                    pixelDensity={1}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0
                    }}
                >
                    <ShaderGradient
                        animate="on"
                        axesHelper="on"
                        bgColor1="#000000"
                        bgColor2="#000000"
                        brightness={1.1}
                        cAzimuthAngle={180}
                        cDistance={3.91}
                        cPolarAngle={115}
                        cameraZoom={1}
                        color1="#342F2F"
                        color2="#141414"
                        color3="#000000"
                        destination="onCanvas"
                        embedMode="off"
                        envPreset="city"
                        format="gif"
                        fov={45}
                        frameRate={10}
                        gizmoHelper="hide"
                        grain="off"
                        lightType="3d"
                        pixelDensity={1}
                        positionX={-0.5}
                        positionY={0.1}
                        positionZ={0}
                        range="disabled"
                        rangeEnd={40}
                        rangeStart={0}
                        reflection={0.1}
                        rotationX={0}
                        rotationY={0}
                        rotationZ={235}
                        shader="defaults"
                        type="waterPlane"
                        uAmplitude={0}
                        uDensity={1.1}
                        uFrequency={5.5}
                        uSpeed={0.3}
                        uStrength={2.4}
                        uTime={0.2}
                        wireframe={false}
                    />
                </ShaderGradientCanvas>

            </motion.div>

        </div>
    );
}

export default Login;