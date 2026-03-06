"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
    const { language, toggleLanguage, t } = useLanguage();
    const pathname = usePathname();
    const isHome = pathname === "/";

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const showWhiteBg = !isHome || scrolled;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                showWhiteBg
                    ? "bg-white/80 backdrop-blur-sm border-b border-gray-100"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-light tracking-tight text-gray-900"
                >
                    Nextis
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/hardware"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        style={{ fontSize: "var(--text-small)" }}
                    >
                        {t.nav.hardware}
                    </Link>
                    <Link
                        href="/blog"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        style={{ fontSize: "var(--text-small)" }}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/#contact"
                        className="px-5 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                        style={{ fontSize: "var(--text-small)" }}
                    >
                        Join Waitlist
                    </Link>
                    <button
                        onClick={toggleLanguage}
                        className="px-3 py-1.5 font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        style={{ fontSize: "var(--text-small)" }}
                    >
                        {language === "en" ? "DE" : "EN"}
                    </button>
                </div>

                <button
                    onClick={() => setMobileOpen((prev) => !prev)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                    aria-label={t.nav.openMenu}
                >
                    <span
                        className={`block w-5 h-px bg-gray-900 transition-all duration-300 ${
                            mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
                        }`}
                    />
                    <span
                        className={`block w-5 h-px bg-gray-900 transition-all duration-300 ${
                            mobileOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block w-5 h-px bg-gray-900 transition-all duration-300 ${
                            mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                        }`}
                    />
                </button>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                    mobileOpen ? "max-h-64 border-b border-gray-100" : "max-h-0"
                } bg-white/95 backdrop-blur-sm`}
            >
                <div className="px-6 py-4 flex flex-col gap-4">
                    <Link
                        href="/hardware"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        style={{ fontSize: "var(--text-small)" }}
                        onClick={() => setMobileOpen(false)}
                    >
                        {t.nav.hardware}
                    </Link>
                    <Link
                        href="/blog"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        style={{ fontSize: "var(--text-small)" }}
                        onClick={() => setMobileOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/#contact"
                        className="inline-block text-center px-5 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                        style={{ fontSize: "var(--text-small)" }}
                        onClick={() => setMobileOpen(false)}
                    >
                        Join Waitlist
                    </Link>
                    <button
                        onClick={() => {
                            toggleLanguage();
                            setMobileOpen(false);
                        }}
                        className="text-gray-600 hover:text-gray-900 transition-colors text-left"
                        style={{ fontSize: "var(--text-small)" }}
                    >
                        {language === "en" ? "Deutsch" : "English"}
                    </button>
                </div>
            </div>
        </nav>
    );
}
