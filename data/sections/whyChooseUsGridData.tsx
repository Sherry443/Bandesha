import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsImage from "@/public/img/why-choose-us/1.jpg";
import WhyChooseUsImageMobile from "@/public/img/why-choose-us/575.jpg";
import PromoImage from "@/public/img/why-choose-us/2.jpg";
import Icons from "@/components/Icons";

export const WhyChooseUsGridData: SectionProps = {
    wrapperCls: "mt-100 section-padding",
    container: "container",
    image: {
        src: WhyChooseUsImage.src,
        srcMobile: WhyChooseUsImageMobile.src,
        width: 1000,
        height: 742,
        loading: "lazy",
        alt: "Digital marketing image"
    },
    subheading: "Why Choose Us",
    heading: "Driving Growth Through Digital Innovation",
    text: "We deliver strategic and data-driven marketing solutions that help your brand engage audiences and boost conversions.",
    button: {
        label: "Learn More About Us",
        href: "/about-us",
        type: "primary"
    },
    rotatingLogo: {
        logo: <Icons.ChooseRotatingLogo />,
        text: "15+",
    },
    promotions: [
        {
            icon: <Icons.Mission />,
            title: "Our Mission",
            text: "Our mission is to create impactful campaigns, engage target audiences, and maximize ROI for clients.",
        },
        {
            icon: <Icons.Vision />,
            title: "Our Vision",
            text: "Our vision is to be the leading digital partner for brands, driving innovation and measurable growth.",
        },
        {
            icon: <Icons.Awards />,
            title: "Our Awards",
            text: "We have been recognized for excellence in digital marketing, creativity, and client success worldwide.",
        },
    ],
    promoImage: {
        src: PromoImage.src,
        width: 800,
        height: 834,
        loading: "lazy",
        alt: "Digital marketing promo image"
    },
}
