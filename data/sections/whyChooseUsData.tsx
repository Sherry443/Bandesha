import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsImage from "@/public/img/promotion/pm.png";
import Icons from "@/components/Icons";

export const WhyChooseUsData: SectionProps = {
    wrapperCls: "mt-100 section-padding",
    container: "container",
    image: {
        src: WhyChooseUsImage.src,
        width: 1100,
        height: 1569,
        loading: "lazy",
        alt: "Digital marketing strategy and growth"
    },
    subheading: "Why Choose Us",
    heading: "We build the best Shopify Stores",
    text: "With Bandesha, build your Shopify app and store featuring user friendly UI/UX design and its complete optimization with 100% Audit.",
    button: {
        label: "Explore Our Services",
        href: "/about-us",
        type: "secondary"
    },
    promotions: [
        {
            icon: <Icons.Winning />,
            title: "Proven <br />Results",
            text: "ROI-focused campaigns designed to generate real growth, not just impressions.",
        },
        {
            icon: <Icons.Support />,
            title: "Dedicated <br />Support",
            text: "A hands-on team that works closely with you to optimize and scale performance.",
        },
    ],
    counterData: [
        {
            number: 300,
            suffix: "+",
            title: "Shopify Stores Built",
            aos: "fade-up",
            aosDelay: 20,
        },
        {
            number: 5,
            suffix: "M+",
            title: "Revenue Generated for Clients",
        },
        {
            number: 8,
            suffix: "+",
            title: "Years of Expertise",
        },
    ],
};
