import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsImage from "@/public/img/promotion/1.jpg";
import Icons from "@/components/Icons";

export const webWorkingData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container-fluid",
    subheading: "Working Process",
    heading: "How We Bring Your Ideas to Life",
    text: "Empowering future & brands with leading-edge design solutions that inspire growth, spark innovation, and create lasting impact.",
    button: {
        label: "Discover More",
        href: "/about-us",
        type: "secondary"
    },
    promotions: [
        {
            icon: <Icons.Discover />,
            title: "Front-End Development",
            text: "Starting by understanding your vision, goals, and brand story deeply.",
        },
        {
            icon: <Icons.Analyze />,
            title: "Back-End Development",
            text: "Exploring market trends and audience insights to shape clear direction.",
        },
        {
            icon: <Icons.Strategy />,
            title: "Ecommerce Development",
            text: "Crafting a clear, tailored roadmap designed to achieve your objectives.",
        },
        {
            icon: <Icons.Design />,
            title: "Site Maintenance",
            text: "Turning concepts into innovative solutions that create lasting impact.",
        },
        {
            icon: <Icons.Refine />,
            title: "Performance Optimization",
            text: "We review, optimize, and perfect every detail for flawless results.",
        },
        {
            icon: <Icons.Launch />,
            title: "CMS Development",
            text: "Delivering impactful results while ensuring your brand’s long-term success.",
        },
    ],
}