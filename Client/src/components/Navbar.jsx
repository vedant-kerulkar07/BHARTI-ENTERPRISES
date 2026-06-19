import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FaRocket } from "react-icons/fa";
import { Menu } from "lucide-react";

const navLinks = [
    "About",
    "Mission",
    "Services",
    "Projects",
    "Contact",
];

const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mt-4 flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-[#04142E]/70 px-6 backdrop-blur-xl">

                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">
                            <FaRocket className="text-white" />
                        </div>

                        <h1 className="text-lg font-bold text-white md:text-xl">
                            BHARTI{" "}
                            <span className="text-cyan-400">
                                ENTERPRISES
                            </span>
                        </h1>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                whileHover={{ y: -2 }}
                                className="text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:text-cyan-400"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Desktop Button */}
                    <div className="hidden md:block">
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 text-white">
                                Get Started
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="rounded-xl border border-white/10 p-2 text-white">
                                    <Menu size={24} />
                                </button>
                            </SheetTrigger>

                            <SheetContent
                                side="right"
                                className="border-white/10 bg-[#04142E] text-white"
                            >
                                <div className="mt-12 flex flex-col gap-6">

                                    {navLinks.map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase()}`}
                                            className="text-lg font-semibold text-white/80 transition hover:text-cyan-400"
                                        >
                                            {item}
                                        </a>
                                    ))}

                                    <Button className="mt-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600">
                                        Get Started
                                    </Button>

                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>
        </motion.header>
    );
};

export default Navbar;