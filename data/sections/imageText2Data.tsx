import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";
import Image1 from '@/public/img/image-text/img2.png';
import Image2 from '@/public/img/image-text/img-small.png';

export const ImageText2Data: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    subheading: "Our Secret Magic",
    heading: "More Clicks, More Growth, More Sales, Less Fluff",
    text: "We turn businesses into strong, recognizable brands by consistently driving traffic, leads, and revenue through proven marketing systems.",
    textList: [
        {
            icon: <Icons.Ambition />,
            title: "Our ambition",
            text: "We do data-driven digital marketing that deliver real-world results."
        },
        {
            icon: <Icons.Purpose />,
            title: "Our purpose",
            text: "Building powerful brands with strategies that convert, scale, and win."
        }
    ],
    button: {
        label: "More About Us",
        href: "/about-us",
        type: "primary"
    },
    imageList: [
        {
            src: Image1.src,
            width: 992,
            height: 863,
            alt: 'Image',
            loading: 'lazy'
        },
        {
            src: Image2.src,
            width: 195,
            height: 202,
            alt: 'Image',
            loading: 'lazy'
        }
    ]
}
