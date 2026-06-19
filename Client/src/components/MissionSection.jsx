import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

const cards = [
    {
        title: "Our Vision",
        icon: Eye,
        description:
            "To be the invisible backbone of the global digital economy, bridging the connectivity gap through innovation.",
        color: "#2563EB",
    },
    {
        title: "Our Mission",
        icon: Target,
        description:
            "Deploying resilient, high-speed telecom infrastructure that empowers communities and businesses across the nation.",
        color: "#ffffff",
    },
    {
        title: "Core Values",
        icon: ShieldCheck,
        description:
            "Safety-first culture, unwavering integrity, and precision engineering in every project we undertake.",
        color: "#06B6D4",
    },
];

export default function Mission() {
    return (
        <section 
        id="mission"
        className="relative min-h-screen overflow-hidden bg-[#04142E] flex items-center justify-center px-5 pt-0 pb-16 ">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

            <div className="relative z-10 w-full max-w-6xl">
                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-white text-4xl md:text-6xl font-bold">
                        The Core Protocol
                    </h2>

                    <p className="mt-4 text-gray-400 text-sm md:text-base">
                        Hover to reveal our operational directives
                    </p>
                </div>

                {/* Desktop */}
                <motion.div
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="relative hidden md:flex items-center justify-center h-[500px]"
                >
                    {/* Left Card */}
                    <motion.div
                        variants={{
                            rest: {
                                x: 0,
                                rotate: 0,
                                scale: 0.9,
                                opacity: 0.7,
                            },
                            hover: {
                                x: -240,
                                rotate: -16,
                                scale: 1,
                                opacity: 1,
                            },
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 12,
                        }}
                        className="absolute"
                    >
                        <Card {...cards[0]} />
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        variants={{
                            rest: {
                                x: 0,
                                rotate: 0,
                                scale: 0.9,
                                opacity: 0.7,
                            },
                            hover: {
                                x: 240,
                                rotate: 16,
                                scale: 1,
                                opacity: 1,
                            },
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 12,
                        }}
                        className="absolute"
                    >
                        <Card {...cards[2]} />
                    </motion.div>

                    {/* Center Card */}
                    <motion.div
                        variants={{
                            rest: {
                                scale: 1,
                            },
                            hover: {
                                scale: 1.04,
                            },
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 180,
                            damping: 12,
                        }}
                        className="relative z-20"
                    >
                        <Card {...cards[1]} center />
                    </motion.div>
                </motion.div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                    <div
                        className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 scrollbar-hide">
                        {cards.map((card) => (
                            <div
                                key={card.title}
                                className="snap-center shrink-0 w-full flex justify-center">
                                <Card {...card} />
                            </div>
                        ))}
                    </div>
                     <div className="flex justify-center gap-2 mt-5">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                </div>
                </div>
            </div>
        </section>
    );
}

function Card({
    title,
    description,
    icon: Icon,
    color,
    center = false,
}) {
    return (
        <div
            className={`w-[85vw] max-w-[340px] h-[380px] rounded-[36px] bg-[#1A2742] border border-white/5 shadow-[0_0_40px_rgba(37,99,235,0.15)] backdrop-blur-xl px-8 py-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_60px_rgba(37,99,235,0.35)]
        ${center
                    ? "shadow-[0_0_70px_rgba(37,99,235,0.25)]"
                    : ""
                }
      `}
        >
            {/* Icon */}
            <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-10"
                style={{
                    background:
                        "linear-gradient(145deg,#0f172a,#23314f)",
                    boxShadow:
                        "0 0 25px rgba(59,130,246,.25)",
                }}
            >
                <Icon size={26} color={color} />
            </div>

            {/* Title */}
            <h3 className="text-white text-4xl font-bold mb-6">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-base leading-8">
                {description}
            </p>

            {/* Bottom Indicator */}
            <div
                className="mt-auto w-10 h-1 rounded-full"
                style={{
                    background: color,
                }}
            />
        </div>
    );
}