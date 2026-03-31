import { BannerSliderType } from "@/types/bannerSlider";
import { BannerSlides } from '@/data/sections/heroSliderData';
import BannerSliderImage from "@/public/img/slider/slider-bg.jpg";

export const BannerWithSliderData: BannerSliderType = {
    wrapperCls: "with-floating-header",
    backgroundImage: BannerSliderImage.src,
    subheading: "ROI-Focused Digital Marketing",
    heading: "Steering Your Business Toward Success",
    styledText: "Business",
    text: "We Build Strategies That Drive Traffic, Convert Leads & Scale Businesses.",
    phone: "+3221609558",
    button: {
        label: "Get Started",
        href: "/contact-us",
        type: "primary"
    },
    logoIconName: "LogoRotate",
    slides: BannerSlides,
    navigation: true,
}
