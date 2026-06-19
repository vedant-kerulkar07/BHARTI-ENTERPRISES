import { motion } from "framer-motion";
import {
    Phone,
    MapPin,
    Brain,
    BadgeCheck,
    Handshake,
    Rocket,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";


export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#020B2D] text-white">


            <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-40 pb-10">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* ================= COMPANY ================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                                <Rocket size={22} />
                            </div>

                            <h3 className="text-2xl font-bold">
                                BHARTI
                            </h3>
                        </div>

                        <p className="mt-8 text-slate-400 leading-8">
                            Powering India's digital connectivity with premium telecom
                            infrastructure since 2018. Expertise, Reliability,
                            Execution.
                        </p>

                        <div className="mt-8 flex gap-4">

                            <SocialIcon>
                                <Brain size={18} />
                            </SocialIcon>

                            <SocialIcon>
                                <BadgeCheck size={18} />
                            </SocialIcon>

                            <SocialIcon>
                                <Handshake size={18} />
                            </SocialIcon>

                        </div>
                    </motion.div>

                    {/* ================= QUICK NAV ================= */}

                    <FooterColumn
                        title="QUICK NAVIGATION"
                        links={[
                            "Our Story",
                            "Regional Presence",
                            "Fleet Operations",
                            "Career Hub",
                            "Terms of Work",
                        ]}
                    />

                    {/* ================= SERVICES ================= */}

                    <FooterColumn
                        title="TECHNICAL SERVICES"
                        links={[
                            "Fiber Optics Deployment",
                            "Tower Site Civil Work",
                            "Equipment Logistics",
                            "Network Fault Recovery",
                            "ISP Support Services",
                        ]}
                    />

                    {/* ================= CONTACT ================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="mb-8 text-sm font-bold tracking-[3px]">
                            SUPPORT HUB
                        </h4>

                        <div className="space-y-6">

                            <div className="flex gap-4">
                                <Phone
                                    size={20}
                                    className="text-cyan-400"
                                />

                                <span className="text-slate-300">
                                    +91 78879 09039
                                </span>
                            </div>

                            <div className="flex gap-4">
                                <MapPin
                                    size={20}
                                    className="text-cyan-400"
                                />

                                <span className="text-slate-300 leading-7">
                                    MIDC ,
                                    Ahilyanagar,
                                    MH 414111
                                </span>
                            </div>

                        </div>

                        <Card className="mt-8 border border-white/10 bg-white/5 backdrop-blur-xl">
                            <CardContent className="p-6">
                                <h5 className="mb-2 text-sm font-bold tracking-wider">
                                    TECHNICAL HELPLINE
                                </h5>

                                <p className="text-sm leading-7 text-slate-400">
                                    Active 24/7 for operational emergencies and
                                    fault recovery.
                                </p>
                            </CardContent>
                        </Card>

                    </motion.div>

                </div>

                {/* Bottom Border */}

                <div className="mt-16 border-t border-white/10 pt-8">

                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

                        <p>
                            © {new Date().getFullYear()} Bharat Enterprises.
                            All rights reserved.
                        </p>

                        <p>
                            Building Telecom Infrastructure Across India
                        </p>

                    </div>

                </div>

            </div>
        </footer>
    );
}

/* ================= COLUMN ================= */

function FooterColumn({ title, links }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h4 className="mb-8 text-sm font-bold tracking-[3px] text-white uppercase">
                {title}
            </h4>

            <ul className="space-y-5">
                {links.map((item) => (
                    <li key={item}>
                        <a
                            className="text-slate-400 transition-all duration-300 hover:text-cyan-400 hover:translate-x-1 inline-block"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

/* ================= SOCIAL ================= */

function SocialIcon({ children }) {
    return (
        <motion.a
            href="#"
            whileHover={{
                y: -4,
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.95,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
        >
            {children}
        </motion.a>
    );
}