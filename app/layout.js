import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ToastProvider } from "@/contexts/ToastContext";
import Navigation from "@/components/Navigation";
import Toast from "@/components/Toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nextis — Building the Universal Constructor",
  description: "Autonomous robotic assembly. Teach a task once, run it forever. Dual-arm, vision-guided, learns from demonstration.",
  metadataBase: new URL("https://www.nextis.tech"),
  openGraph: {
    title: "Nextis — Building the Universal Constructor",
    description: "Autonomous robotic assembly. Teach a task once, run it forever.",
    url: "https://www.nextis.tech",
    siteName: "Nextis",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextis — Building the Universal Constructor",
    description: "Autonomous robotic assembly. Teach a task once, run it forever.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <LanguageProvider>
          <ToastProvider>
            <Navigation />
            {children}
            <Toast />
          </ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
