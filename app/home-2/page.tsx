import { BannerWithSliderData } from '@/data/sections/bannerWithSliderData';
import { ImageText2Data } from '@/data/sections/imageText2Data';
import { OurServicesDataAccordion } from '@/data/sections/ourServicesDataAccordion';
import { FeaturedProjectData } from '@/data/sections/featuredProjectData';
import { PricingPlanData } from '@/data/sections/pricingPlanData';
import { TestimonialSliderThumbData } from '@/data/sections/testimonialSliderThumbData';
import { ServicesSliderHeadingsData } from "@/data/sections/servicesSliderHeadings";
import { RecentProjectGridData } from "@/data/sections/recentProjectGridData";
import { HeroBannerData } from "@/data/sections/heroBannerData";
import { TestimonialSlider2Data } from "@/data/sections/testimonial2Data";
import { WhyChooseUsData } from '@/data/sections/whyChooseUsData';

import BannerWithSlider from "@/components/sections/BannerWithSlider";
import ImageText2 from '@/components/sections/ImageText2';
import OurServicesAccordion from '@/components/sections/OurServicesAccordion';
import ServicesSlider from "@/components/sections/ServicesSlider";
import RecentProjectGrid from "@/components/sections/RecentProjectGrid";
import PricingPlan from '@/components/sections/PricingPlan';
import TestimonialSliderWithThumb from '@/components/sections/TestimonialSliderWithThumb';
import ProjectSlider from '@/components/sections/ProjectSlider';
import HeroBanner from "@/components/sections/HeroBanner";
import TestimonialSlider2 from "@/components/sections/TestimonialSlider2";
import WhyChooseUs from '@/components/sections/WhyChooseUs';


const Home2 = () => {
    return(
        <>
            {/* Banner Slider */}
            <BannerWithSlider data={BannerWithSliderData} />

            {/* Image Text */}
            <ImageText2 data={ImageText2Data} />


            {/* Service */}
            <ServicesSlider 
                data={ServicesSliderHeadingsData} 
                pagination={true}
            />

            {/* Recent Projects */}
            <RecentProjectGrid data={RecentProjectGridData} />

            {/* Why Choose Us */}
           <WhyChooseUs data={WhyChooseUsData} />

            {/* Testimonial Slider */}
            <TestimonialSlider2 
                data={TestimonialSlider2Data} 
                pagination={true} 
            />
        </>
    )
}

export default Home2;