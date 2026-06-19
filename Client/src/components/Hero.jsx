import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ColorBends from "@/reactbits/ColorBends";


const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <ColorBends
                    colors={[
                        "#00BFFF",
                        "#2563EB",
                        "#06B6D4",
                    ]}
                    rotation={90}
                    speed={0.27}
                    scale={1}
                    frequency={1}
                    warpStrength={1}
                    mouseInfluence={0.3}
                    noise={0.15}
                    parallax={0.2}
                    iterations={1}
                    intensity={1}
                    bandWidth={5}
                    transparent
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#04142E]/40 via-[#04142E]/60 to-[#04142E]" />

            {/* Glow Effect */}
            <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-5 pt-24 pb-16 text-center sm:px-6">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 sm:px-6 sm:py-3 backdrop-blur-xl">
                        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                        <span className="text-[10px] sm:text-xs font-medium tracking-[0.25em] text-cyan-300 uppercase">
                            Infrastructure Revolution Since 2018
                        </span>
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl text-4xl font-black leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-8xl"
                >
                    Building Telecom

                    <br />

                    <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Infrastructure
                    </span>

                    <br />

                    Across India
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg"
                >
                    Delivering telecom projects, network expansion,
                    fiber installation, civil infrastructure and
                    transportation support with unmatched technical
                    excellence across India.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-10 flex w-full max-w-md flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row"
                >
                    <Button
                        size="lg"
                        onClick={() =>
                            document
                                .getElementById("services")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="group rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8"
                    >
                        Explore Services

                    </Button>

                    <Button
                        size="lg"
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        variant="outline"
                        className="w-full sm:w-auto rounded-full border-cyan-400/30 bg-white/5 px-8 text-white backdrop-blur-md hover:bg-white/10"
                    >
                        Contact Us
                    </Button>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
