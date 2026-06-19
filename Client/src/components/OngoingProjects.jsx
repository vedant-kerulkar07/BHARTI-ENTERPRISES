import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getEnv } from "@/helpers/getEnv";


const OngoingProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        try {
            const response = await fetch(`${getEnv("VITE_API_URL")}/projects/all`
            );
            const data = await response.json();

            if (data.success) {
                setProjects(data.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section className="bg-[#05132B] py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-white text-xl">
                        Loading Projects...
                    </h2>
                </div>
            </section>
        );
    }

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#05132B] py-24"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-40 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                {/* Heading */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Ongoing{" "}
                        <span className="text-cyan-400">
                            Projects
                        </span>
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-400" />

                    <p className="mx-auto mt-6 max-w-2xl text-slate-400">
                        Explore our portfolio of telecom and
                        infrastructure projects currently being
                        executed across various locations.
                    </p>
                </motion.div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
                        {projects.map((project) => (
                            <div
                                key={project._id}
                                className="mb-5 overflow-hidden rounded-[32px] border border-white/10 bg-white/5"
                            >
                                <img
                                    src={project.image}
                                    alt="Project"
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {projects.map((project) => (
                            <motion.div
                                key={project._id}
                                whileTap={{
                                    scale: 0.98,
                                }}
                                className="min-w-[85%] snap-center overflow-hidden rounded-3xl border border-white/10 bg-white/5">

                                <img
                                    src={project.image}
                                    alt="Project"
                                    className="h-[450px] w-full object-cover"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OngoingProjects;