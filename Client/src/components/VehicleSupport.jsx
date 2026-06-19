import { motion } from "framer-motion";
import { Truck, Route, Clock3, Package } from "lucide-react";

const transportFeatures = [
    {
        title: "North Maharashtra Hub",
        description:
            "Covering Ahilyanagar, Nashik, and Jalgoan Districts.",
        icon: Route,
    },
    {
        title: "Konkan & Coastal Hub",
        description:
            "Covering Mumbai, Thane, and and entire Konkan region.",
        icon: Truck,
    },
    {
        title: "Vidarbha Regional Hub",
        description:
            "Strategically serving Nagpur, Amravati Districts.",
        icon: Package,
    },
];

const VehicleSupport = () => {
    return (
        <section className="relative py-28 pt-1 pb-5 overflow-hidden bg-[#06152D]">
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Vehicle &{" "}
                        <span className="text-blue-500">Transport Support</span>
                    </h2>

                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />

                    <p className="text-slate-400 max-w-2xl mx-auto mt-6">
                        Dedicated logistics infrastructure and transportation support
                        enabling More than 25 vehicles. 24/7 availability for seamless project execution across Maharashtra and 
                        neighboring states.
                    </p>
                </motion.div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block relative max-w-6xl mx-auto">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500 shadow-[0_0_25px_#3b82f6]" />

                    {transportFeatures.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -80 : 80,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className={`flex items-center mb-24 ${index % 2 === 0
                                        ? "justify-start"
                                        : "justify-end"
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2">
                                    <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
                                </div>

                                <div className="w-[42%]">
                                    <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                                <Icon className="h-6 w-6 text-cyan-400" />
                                            </div>

                                            <h3 className="text-2xl font-semibold text-cyan-400">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <p className="text-slate-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Version */}
                <div className="lg:hidden space-y-5">
                    {transportFeatures.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                        <Icon className="h-5 w-5 text-cyan-400" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-slate-400 mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default VehicleSupport;