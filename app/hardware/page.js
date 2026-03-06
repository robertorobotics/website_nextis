import HardwarePage from "@/components/HardwarePage";

export const metadata = {
    title: "AIRA Teleop Kit - Nextis",
    description:
        "Leader-follower teleoperation kit. CNC aluminum, Damiao follower, Dynamixel XL330 leader. Built to order.",
    openGraph: {
        title: "AIRA Teleop Kit - Nextis",
        description: "Leader-follower teleoperation kit. CNC aluminum. Built to order.",
        url: "https://www.nextis.tech/hardware",
        siteName: "Nextis",
    },
};

export default function Hardware() {
    return <HardwarePage />;
}
