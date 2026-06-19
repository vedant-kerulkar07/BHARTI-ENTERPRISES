import { motion } from "framer-motion";

const stats = [
    {
        number: "8+",
        label: "YEARS OF EXPERTISE",
    },
    {
        number: "100+",
        label: "PROJECTS EXECUTED",
    },
    {
        number: "2",
        label: "MAJOR STATES",
    },
    {
        number: "150+",
        label: "FIELD SPECIALISTS",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative bg-[#04142E] py-28 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute left-0 top-0 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* LEFT SIDE IMAGES */}
                    <div className="relative h-[550px] hidden lg:block">
                        {/* Top Image */}
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                rotate: -8,
                            }}
                            className="absolute top-0 left-32 bg-white p-4 rounded-md shadow-2xl rotate-[-8deg]"
                        >
                            <img
                                src="https://res.cloudinary.com/dfpgxonqe/image/upload/v1781854229/image_2_tc0mpa.jpg"
                                alt=""
                                className="w-[250px] h-[320px] object-cover"
                            />
                        </motion.div>

                        {/* Bottom Left */}
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                rotate: -4,
                            }}
                            className="absolute bottom-8 left-0 bg-white p-4 rounded-md shadow-2xl rotate-[-4deg]"
                        >
                            <img
                                src="https://res.cloudinary.com/dfpgxonqe/image/upload/v1781853985/images_kl9b1i.jpg"
                                alt=""
                                className="w-[280px] h-[220px] object-cover"
                            />

                            <p className="mt-4 text-[12px] tracking-wider text-slate-500 font-semibold">
                                TOWER INFRASTRUCTURE
                            </p>
                        </motion.div>

                        {/* Bottom Right */}
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                rotate: 6,
                            }}
                            className="absolute bottom-20 left-56 bg-white p-4 rounded-md shadow-2xl rotate-[6deg]"
                        >
                            <img
                                src="https://res.cloudinary.com/dfpgxonqe/image/upload/v1781854067/images_1_accmjx.jpg"
                                alt=""
                                className="w-[250px] h-[180px] object-cover"
                            />

                            <p className="mt-4 text-[12px] tracking-wider text-slate-500 font-semibold">
                                NETWORK DEPLOYMENT
                            </p>
                        </motion.div>
                    </div>

                    {/* MOBILE IMAGE */}
                    <div className="lg:hidden">
                        <img
                            src="https://res.cloudinary.com/dfpgxonqe/image/upload/v1781853985/images_kl9b1i.jpg"
                            alt=""
                            className="rounded-3xl"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>
                        <h2 className="text-5xl font-bold text-white ">
                            About
                        </h2>

                        <h3 className="text-5xl font-bold text-blue-500 mt-2">
                            Bharti Enterprises
                        </h3>

                        <p className="mt-8 text-slate-400 leading-9 text-lg max-w-xl">
                            Founded in 2018, we have evolved into a cornerstone of telecom
                            infrastructure development. From the bustling metros of
                            Maharashtra to the serene coastal lines of Goa, our footprint
                            spans across diverse terrains, delivering high-speed connectivity
                            solutions.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mt-12">
                            {stats.map((item) => (
                                <motion.div
                                    key={item.label}
                                    whileHover={{
                                        y: -6,
                                        scale: 1.03,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                    className="bg-white/[0.03] border border-white/10 rounded-3xl p-8"
                                >
                                    <h4 className="text-5xl font-bold text-cyan-400">
                                        {item.number}
                                    </h4>

                                    <p className="mt-4 text-xs tracking-[0.25em] text-slate-400 font-semibold">
                                        {item.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Button */}
                        <motion.button
                            whileHover={{
                                scale: 1.04,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                            className="mt-10 px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-semibold hover:border-blue-500 transition-all"
                        >
                            READ OUR JOURNEY
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;