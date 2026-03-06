"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/contexts/ToastContext";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const specs = [
    { label: "Follower DOF", value: "7 (includes 1-DOF gripper)" },
    { label: "Follower Actuators", value: "Damiao J8009P (base), J4340 (mid), J4310 (upper)" },
    { label: "Follower Material", value: "CNC 6061 aluminum" },
    { label: "Follower Payload", value: "1.5 kg rated" },
    { label: "Follower Reach", value: "680 mm" },
    { label: "Leader DOF", value: "7" },
    { label: "Leader Actuators", value: "Dynamixel XL330" },
    { label: "Arm Weight", value: "~3 kg each" },
];

export default function HardwarePage() {
    const { t } = useLanguage();
    const { showToast } = useToast();
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const useCase = form.useCase.value;
        const country = form.country.value;

        if (!EMAIL_REGEX.test(email)) {
            showToast(t.forms.invalidEmail, "error");
            return;
        }

        setSubmitting(true);
        try {
            const res = await fetch("/api/hardware-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, useCase, country }),
            });

            if (res.ok) {
                showToast(t.hardware.formSuccess, "success");
                form.reset();
            } else {
                showToast("Something went wrong. Please try again.", "error");
            }
        } catch {
            showToast("Something went wrong. Please try again.", "error");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <main>
            {/* Hero */}
            <section className="bg-white pt-32 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto px-6 text-center"
                >
                    <h1
                        className="font-light text-gray-900"
                        style={{ fontSize: "var(--text-section-title)" }}
                    >
                        {t.hardware.title}
                    </h1>
                    <p
                        className="mt-4 text-gray-600 font-light"
                        style={{ fontSize: "var(--text-body-lg)" }}
                    >
                        {t.hardware.subtitle}
                    </p>
                    <p className="mt-8 text-3xl md:text-4xl font-medium text-gray-900">
                        &euro;{t.hardware.price}
                    </p>
                    <p className="mt-2 text-gray-500 text-sm">
                        {t.hardware.priceNote}
                    </p>
                    <p
                        className="mt-8 text-gray-600 font-light"
                        style={{ fontSize: "var(--text-body-lg)" }}
                    >
                        {t.hardware.openSourceTeaser}
                    </p>
                </motion.div>
            </section>

            {/* What You Get */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2
                        className="text-center font-light text-gray-900 mb-12"
                        style={{ fontSize: "var(--text-section-title)" }}
                    >
                        {t.hardware.whatsIncluded}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-6 border border-gray-100">
                            <h3 className="font-medium text-gray-900 mb-2">
                                {t.hardware.followerArm}
                            </h3>
                            <p
                                className="text-gray-600 font-light"
                                style={{ fontSize: "var(--text-body)" }}
                            >
                                {t.hardware.followerDesc}
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-6 border border-gray-100">
                            <h3 className="font-medium text-gray-900 mb-2">
                                {t.hardware.leaderArm}
                            </h3>
                            <p
                                className="text-gray-600 font-light"
                                style={{ fontSize: "var(--text-body)" }}
                            >
                                {t.hardware.leaderDesc}
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-6 border border-gray-100">
                            <h3 className="font-medium text-gray-900 mb-2">
                                {t.hardware.frame}
                            </h3>
                            <p
                                className="text-gray-600 font-light"
                                style={{ fontSize: "var(--text-body)" }}
                            >
                                {t.hardware.frameDesc}
                            </p>
                        </div>
                    </div>
                    <p
                        className="mt-6 text-center text-gray-500"
                        style={{ fontSize: "var(--text-small)" }}
                    >
                        {t.hardware.extras}
                    </p>
                </div>
            </section>

            {/* Specs */}
            <section className="bg-white py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2
                        className="text-center font-light text-gray-900 mb-12"
                        style={{ fontSize: "var(--text-section-title)" }}
                    >
                        {t.hardware.specsTitle}
                    </h2>
                    <div className="max-w-lg mx-auto">
                        {specs.map((spec, i) => (
                            <div
                                key={spec.label}
                                className={`flex justify-between py-3 ${
                                    i < specs.length - 1
                                        ? "border-b border-gray-100"
                                        : ""
                                }`}
                            >
                                <span
                                    className="text-gray-500"
                                    style={{ fontSize: "var(--text-body)" }}
                                >
                                    {spec.label}
                                </span>
                                <span
                                    className="text-gray-900 font-medium"
                                    style={{ fontSize: "var(--text-body)" }}
                                >
                                    {spec.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Is This For */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2
                        className="font-light text-gray-900 mb-6"
                        style={{ fontSize: "var(--text-section-title)" }}
                    >
                        {t.hardware.whoIsThisFor}
                    </h2>
                    <p
                        className="text-gray-700 font-light max-w-2xl mx-auto leading-relaxed"
                        style={{ fontSize: "var(--text-body-lg)" }}
                    >
                        {t.hardware.whoDesc}
                    </p>
                </div>
            </section>

            {/* Request Form */}
            <section className="bg-white py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2
                        className="text-center font-light text-gray-900 mb-2"
                        style={{ fontSize: "var(--text-section-title)" }}
                    >
                        {t.hardware.ctaTitle}
                    </h2>
                    <p
                        className="text-center text-gray-600 mb-10"
                        style={{ fontSize: "var(--text-body)" }}
                    >
                        {t.hardware.ctaSubtitle}
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-md mx-auto flex flex-col gap-4"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder={t.hardware.namePlaceholder}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white"
                            style={{ fontSize: "var(--text-body)" }}
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder={t.hardware.emailPlaceholder}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white"
                            style={{ fontSize: "var(--text-body)" }}
                        />
                        <textarea
                            name="useCase"
                            rows={3}
                            placeholder={t.hardware.useCasePlaceholder}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white resize-none"
                            style={{ fontSize: "var(--text-body)" }}
                        />
                        <input
                            type="text"
                            name="country"
                            placeholder={t.hardware.countryPlaceholder}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white"
                            style={{ fontSize: "var(--text-body)" }}
                        />
                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitting ? t.forms.submitting : t.hardware.submit}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
