import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaPaperPlane,
} from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";
import { getEnv } from "@/helpers/getEnv";


const Contact = () => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        projectType: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await fetch(
                `${getEnv("VITE_API_URL")}/user/contact`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            toast.success(data.message);

            setFormData({
                fullName: "",
                phoneNumber: "",
                projectType: "",
                message: "",
            });
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#0A1730] py-24"
        >
            {/* Background Effects */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00D4FF20,transparent_35%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#2563EB20,transparent_35%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
                            Contact Us
                        </span>

                        <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white leading-tight">
                            Let's Build
                            <br />
                            The <span className="text-cyan-400">Future</span>
                        </h2>

                        <p className="mt-8 text-slate-300 text-lg leading-relaxed max-w-lg">
                            Connect with our infrastructure specialists to discuss
                            your telecom, transportation, labour contracting, and
                            network deployment requirements.
                        </p>

                        <div className="mt-12 space-y-6">
                            <ContactCard
                                icon={<FaMapMarkerAlt />}
                                title="Head Office"
                                value="MIDC, Ahilyanagar, Maharashtra - 414111"
                            />

                            <ContactCard
                                icon={<FaPhoneAlt />}
                                title="Direct Call"
                                value="+91 78879 09039"
                            />

                            <ContactCard
                                icon={<FaEnvelope />}
                                title="Email Support"
                                value="sayyed347zaid@gmail.com"
                            />
                        </div>
                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,212,255,0.08)]">

                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />

                        <form
                            onSubmit={handleSubmit}
                            className="relative space-y-6"
                        >
                            <div className="grid md:grid-cols-2 gap-4">
                                <Input
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            fullName: e.target.value,
                                        })
                                    }
                                    className="h-12 border-white/10 bg-white/5"
                                />

                                <Input
                                    placeholder="+91 9876543210"
                                    value={formData.phoneNumber}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            phoneNumber: e.target.value,
                                        })
                                    }
                                    className="h-12 border-white/10 bg-white/5"
                                />
                            </div>

                            <Select
                                value={formData.projectType}
                                onValueChange={(value) =>
                                    setFormData({
                                        ...formData,
                                        projectType: value,
                                    })
                                }
                            >
                                <SelectTrigger className="h-12 border-white/10 bg-black/5">
                                    <SelectValue placeholder="Select Project Type" />
                                </SelectTrigger>

                                <SelectContent
                                    className="bg-[#0A1730] border-white/10 text-white backdrop-blur-xl">
                                    <SelectItem value="Fiber Network Deployment"
                                        className="text-white focus:bg-cyan-500/20 focus:text-white cursor-pointer">
                                        Fiber Network Deployment
                                    </SelectItem>

                                    <SelectItem value="Labour Supplier & Contractor"
                                        className="text-white focus:bg-cyan-500/20 focus:text-white cursor-pointer">
                                        Labour Supplier & Contractor
                                    </SelectItem>

                                    <SelectItem value="Transportation Services"
                                        className="text-white focus:bg-cyan-500/20 focus:text-white cursor-pointer">
                                        Transportation Services
                                    </SelectItem>

                                    <SelectItem value="Civil Construction"
                                        className="text-white focus:bg-cyan-500/20 focus:text-white cursor-pointer">
                                        Civil Construction
                                    </SelectItem>
                                    <SelectItem value="Engineering Services"
                                        className="text-white focus:bg-cyan-500/20 focus:text-white cursor-pointer">
                                        Engineering Services
                                    </SelectItem>
                                    <SelectItem value="Other"
                                        className="text-white focus:bg-cyan-500/20 focus:text-white cursor-pointer">
                                        Other
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <Textarea
                                placeholder="Tell us about your requirements..."
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                                className="min-h-[180px] resize-none border-white/10 bg-white/5" />

                            <Button
                                disabled={loading}
                                size="lg"
                                className="w-full h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold">
                                {loading ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

function ContactCard({ icon, title, value }) {
    return (
        <motion.div
            whileHover={{
                x: 8,
            }}
            className="flex gap-5 items-start"
        >
            <div
                className="h-14 w-14 rounded-2xl flex items-center justify-center bg-white/5 border border-cyan-500/20 text-cyan-400 text-lg">
                {icon}
            </div>

            <div>
                <h4 className="font-semibold text-white text-lg">
                    {title}
                </h4>

                <p className="text-slate-400 mt-1">
                    {value}
                </p>
            </div>
        </motion.div>
    );
}