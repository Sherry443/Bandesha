import { SectionProps } from "@/types/sectionProps";
import Image1 from "@/public/img/banner/new.webp";
import Image2 from "@/public/img/banner/newe2.webp";
import Image3 from "@/public/img/banner/new3.webp";
import Image4 from "@/public/img/banner/new4.webp";
import Image5 from "@/public/img/banner/new5.webp";

export const ScrollingTextData: SectionProps = {
    wrapperCls: "mt-3 pb-5",
    container: "container",    
    subheading: "Brands",
    heading: "Our Valued Clients", 
    imageList: [        
        {
            src: Image1.src,
            alt: "Scrolling image",
            width: 128,
            height: 46,
            loading: "lazy",
            href: "/about-us"
        },
        {
            src: Image2.src,
            alt: "Scrolling image",
            width: 128,
            height: 46,
            loading: "lazy",
            href: "/about-us"
        },
        {
            src: Image3.src,
            alt: "Scrolling image",
            width: 128,
            height: 46,
            loading: "lazy",
            href: "/about-us"
        },
        {
            src: Image4.src,
            alt: "Scrolling image",
            width: 128,
            height: 46,
            loading: "lazy",
            href: "/about-us"
        },
        {
            src: Image5.src,
            alt: "Scrolling image",
            width: 128,
            height: 46,
            loading: "lazy",
            href: "/about-us"
        }
    ],
}
