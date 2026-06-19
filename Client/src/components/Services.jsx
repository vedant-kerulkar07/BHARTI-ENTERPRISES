import { motion } from "framer-motion";
import {
    FaNetworkWired,
    FaHardHat,
    FaUsers,
    FaTruck,
    FaTools,
    FaBroadcastTower,
} from "react-icons/fa";

const cardClass = `
relative
overflow-hidden
group
rounded-3xl
bg-gradient-to-br
from-[#0B224B]
to-[#132D5E]
border
border-cyan-400/20
transition-all
duration-500
hover:-translate-y-2
hover:border-cyan-400/60
hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]
`;

const GlowLayer = () => (
    <>
        <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

        <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[linear-gradient(120deg,transparent,rgba(34,211,238,0.08),transparent)]" />
    </>
);

const services = [
    {
        title: "Fiber Network Projects",
        description:
            "End-to-end optical fiber installation, splicing, testing and maintenance services.",
        icon: FaBroadcastTower,
    },
    {
        title: "Telecom Network",
        description:
            "Network deployment, optimization and telecom infrastructure support.",
        icon: FaNetworkWired,
    },
    {
        title: "Civil Construction",
        description:
            "Telecom tower foundations, excavation and structural construction.",
        icon: FaHardHat,
    },
    {
        title: "Engineering Services",
        description:
            "Site surveys, planning, documentation and engineering support.",
        icon: FaTools,
    },
    {
        title: "Labour Supplier & Contractor",
        description:
            "Skilled workforce and project execution teams available across India.",
        icon: FaUsers,
    },
    {
    title: "Transportation Services",
    description:
      "Reliable transportation and logistics support for telecom, construction and infrastructure projects across India.",
    icon: FaTruck,
  },
];

const logos = [
    "UNITY TELECOM PVT. LTD.",
    "L&T PVT. LTD.",
    "UNISYS TELEINFRA PVT. LTD.",
    "PRATAP TECHNOCRATS PVT. LTD.",
    "AERIAL TELECOM PVT. LTD.",
    "ORION SECURE",
    "SMART SERVICES",
    "FORESIGHT SERVICES",
];

export default function Service() {
    return (
        <section
            id="services"
            className="relative py-24 px-5 md:px-10 pt-0 pb-16 bg-[#04142E]"
        >
            {/* Heading */}
            <div className="max-w-7xl mx-auto mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black uppercase"
                >
                    <span className="text-white">Our organization </span>
                    <br />
                    <span className="text-cyan-400">services</span>
                </motion.h2>

                <p className="text-gray-400 mt-5 max-w-xl">
                    Specialized end-to-end solutions for modern telecommunications
                    infrastructure and engineering projects.
                </p>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-12 gap-5">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${cardClass} col-span-8 p-10 bg-gradient-to-br from-cyan-900/30 to-blue-900/20`}
                >
                    <GlowLayer />

                    <div className="relative z-10">
                        <div className="text-cyan-400 text-5xl mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] group-hover:scale-100 transition-all duration-500">
                            <FaBroadcastTower />
                        </div>

                        <h3 className="text-white text-3xl font-bold mb-4">
                            Fiber Network Projects
                        </h3>

                        <p className="text-gray-400 max-w-xl">
                            End-to-end optical fiber installation, splicing, testing and maintenance
                            services.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${cardClass} col-span-4 p-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30`}
                >
                    <GlowLayer />

                    <div className="relative z-10">
                        <div className="text-cyan-400 text-4xl mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] group-hover:scale-100 transition-all duration-500">
                            <FaNetworkWired />
                        </div>

                        <h3 className="text-white text-xl font-bold mb-3">
                            Telecom Network
                        </h3>

                        <p className="text-gray-400">
                            Network deployment, optimization and telecom infrastructure support.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${cardClass} col-span-4 p-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30`}
                >
                    <GlowLayer />

                    <div className="relative z-10">
                        <div className="text-cyan-400 text-4xl mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] group-hover:scale-100 transition-all duration-500">
                            <FaHardHat />
                        </div>

                        <h3 className="text-white text-xl font-bold mb-3">
                            Civil Construction
                        </h3>

                        <p className="text-gray-400">
                            Telecom tower foundations, excavation and structural construction.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${cardClass} col-span-8 p-10 bg-gradient-to-r from-cyan-900/30 to-blue-900/30`}
                >
                    <GlowLayer />

                    <div className="relative z-10">
                        <div className="text-cyan-400 text-5xl mb-5 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] group-hover:scale-100 transition-all duration-500">
                            <FaTools />
                        </div>

                        <h3 className="text-white text-2xl font-bold mb-3">
                            Engineering Services
                        </h3>

                        <p className="text-gray-400 max-w-xl">
                            Site surveys, planning, documentation and engineering support.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${cardClass} col-span-8 p-10 bg-gradient-to-r from-cyan-900/30 to-blue-900/30`}
                >
                    <GlowLayer />

                    <div className="relative z-10">
                        <div className="text-cyan-400 text-5xl mb-5 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] group-hover:scale-100 transition-all duration-500">
                            <FaUsers />
                        </div>

                        <h3 className="text-white text-2xl font-bold mb-3">
                            Labour Supplier & Contractor
                        </h3>

                        <p className="text-gray-400 max-w-2xl">
                            Skilled workforce and project execution teams available across India.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${cardClass} col-span-4 p-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30`}
                >
                    <GlowLayer />

                    <div className="relative z-10">
                        <div className="text-cyan-400 text-5xl mb-5 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] group-hover:scale-100 transition-all duration-500">
                            <FaUsers />
                        </div>

                        <h3 className="text-white text-2xl font-bold mb-3">
                            Transportation Services
                        </h3>

                        <p className="text-gray-400 max-w-2xl">
                            Reliable transportation and logistics support for telecom, construction and infrastructure projects across India.
                        </p>
                    </div>
                </motion.div>
                
            </div>

            {/* Mobile Scroll */}
            <div className="lg:hidden">
                <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-5">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={index}
                                whileTap={{ scale: 0.98 }}
                                className={`${cardClass} min-w-[300px] snap-center p-6`}
                            >
                                <div className="text-cyan-400 text-4xl mb-5">
                                    <Icon />
                                </div>

                                <h3 className="text-white text-xl font-bold mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400">{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Infinite Scrolling Clients */}
            <div className="mt-20 overflow-hidden">
                <div className="text-center mb-8">
                    <p className="text-cyan-400 uppercase tracking-[6px] text-xs">
                        TRUSTED BY INDUSTRY LEADERS
                    </p>
                </div>

                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="text-white/40 text-xl md:text-2xl font-bold shrink-0"
                        >
                            {logo}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}