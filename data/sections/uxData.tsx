import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsBg from "@/public/img/why-choose-us/bg.jpg";
import WhyChooseUsImage from "@/public/img/why-choose-us/ux.png";
import WhyChooseUsImageMobile from "@/public/img/why-choose-us/575.jpg";
import PromoImage from "@/public/img/why-choose-us/2.jpg";
import Icons from "@/components/Icons";

export const uxData: SectionProps = {
    wrapperCls: "!bg-transparent mt-100 section-padding",
    container: "container",
    backgroundImage: {
        src: WhyChooseUsBg.src,
        width: 1920,
        height: 887,
        loading: "lazy",
        alt: "Background image"
    },
    image: {
        src: WhyChooseUsImage.src,
        srcMobile: WhyChooseUsImage.src,
        width: 1000,
        height: 742,
        loading: "lazy",
        alt: "Choose us image"
    },
    subheading: "What Makes Us Unique",
    heading: "Transform Your Digital Presence with Bespoke UX Solutions",
    text: "We design user-focused, visually appealing websites that reflect your brand and drive engagement. From smooth navigation to responsive layouts, every element is built for performance.",
    button: {
        label: "More About Us",
        href: "/about-us",
        type: "primary"
    },
    rotatingLogo: {
        logo: <Icons.ChooseRotatingLogo />,
        text: "25",
    },
    promotions: [
        {
            icon: <Icons.Mission />,
            title: "Our Mission",
            text: "Our mission is push engage boundaries, enga audiences, and driv engage.",
        },
        {
            icon: <Icons.Vision />,
            title: "Our Vision",
            text: "Our mission is push engage boundaries, enga audiences, and driv engage.",
        },
        {
            icon: <Icons.Awards />,
            title: "Our Awards",
            text: "Our mission is push engage boundaries, enga audiences, and driv engage.",
        },
    ],
    promoImage: {
        src: PromoImage.src,
        width: 800,
        height: 834,
        loading: "lazy",
        alt: "Choose us image"
    },
}