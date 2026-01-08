import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";

export const ContactData: SectionProps = {
    wrapperCls: "section-padding",
    container: "container",
    subheading: "Contact Us",
    heading: "Let’s Build a Powerful Brand Together",
    text: "Every project we deliver is unique and tailored to your business goals. From design to development, we customize every detail to create digital solutions that perform, scale, and convert.",
    promotions: [
        {
            icon: <Icons.ThumbsUp />,
            title: "300+ Projects Delivered",
            text: "From startups to enterprise brands, we’ve built high-performing websites, apps, and digital platforms across multiple industries.",
        },
        {
            icon: <Icons.Support />,
            title: "450+ Satisfied Clients",
            text: "Trusted by businesses worldwide for our strategy-driven approach, reliable execution, and results-focused digital solutions.",
        },
    ],
    block: {
        heading: "Schedule a Consultation",
        text: "Reach out to us anytime — we respect your inbox and value your privacy.",
    },
};
