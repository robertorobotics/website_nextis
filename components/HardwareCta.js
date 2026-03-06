"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HardwareCta() {
    const { t } = useLanguage();

    return (
        <section className="bg-gray-50 py-16 text-center">
            <p
                className="text-gray-600 font-light"
                style={{ fontSize: "var(--text-body-lg)" }}
            >
                {t.home.hardwareCta}
            </p>
            <Link
                href="/hardware"
                className="mt-2 inline-block text-gray-900 font-medium hover:text-gray-600 transition-colors text-sm tracking-wide"
            >
                {t.home.hardwareCtaLink} →
            </Link>
        </section>
    );
}
