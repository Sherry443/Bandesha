import { SectionProps } from "@/types/sectionProps";
import Image1 from '@/public/img/image-text/img1.png';

export const ImageTextData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    subheading: "Our Company",
    heading: "Redesigning business for solutions",
    text: "We specialize in building strong brand presence, performance marketing, and digital transformation, helping our clients scale their sales and impact in the online world.",
    button: {
        label: "More About Us",
        href: "/contact-us",
        type: "primary"
    },
    image: {
        src: Image1.src,
        width: 992,
        height: 863,
        alt: 'Image',
        loading: 'lazy'
    },
    textList: [
        {
            text: "Blend creative strategies with data-driven insights"
        },
        {
            text: "Deliver high-impact results that drive real growth"
        },
        {
            text: "Believe in the power of smart execution"
        }
    ]
}
