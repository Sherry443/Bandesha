import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsImage from "@/public/img/promotion/1.jpg";
import Icons from "@/components/Icons";

export const usWorkingData: SectionProps = {
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
            title: "Website UI/UX Design",
            text: "Starting by understanding your vision, goals, and brand story deeply.",
        },
        {
            icon: <Icons.Analyze />,
            title: "Responsive Website Design",
            text: "Exploring market trends and audience insights to shape clear direction.",
        },
        {
            icon: <Icons.Strategy />,
            title: "Landing Page Design",
            text: "Crafting a clear, tailored roadmap designed to achieve your objectives.",
        },
        {
            icon: <Icons.Design />,
            title: "Website Redesign Services",
            text: "Turning concepts into innovative solutions that create lasting impact.",
        },
        {
            icon: <Icons.Refine />,
            title: "UI/UX Audits & Optimization",
            text: "We review, optimize, and perfect every detail for flawless results.",
        },

    ],
}