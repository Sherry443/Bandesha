



import { HeroSlidesData } from '@/data/sections/heroSliderData';
import { ImageTextData } from '@/data/sections/imageTextData';
import { ScrollingTextData } from '@/data/sections/scrollingTextData';
import { OurServicesData } from '@/data/sections/ourServicesData';
import { RecentProjectData } from '@/data/sections/recentProjectData';
import { WhyChooseUsData } from '@/data/sections/whyChooseUsData';
import { TeamSliderData } from '@/data/sections/teamSliderData';
import { TestimonialData } from '@/data/sections/testimonialData';
import { FeaturedBlogGridData } from '@/data/sections/featuredBlogGridData';
import { showcaseData } from "@/data/sections/showcaseData";
import { TestimonialSlider2Data } from "@/data/sections/testimonial2Data";


import HeroSlider from '@/components/sections/HeroSlider';
import ScrollAnimationDemo from '@/components/sections/Animated';
import ImageText from '@/components/sections/ImageText';
import ScrollingText from '@/components/sections/ScrollingText';
import OurServices from '@/components/sections/OurServices';
import RecentProject from '@/components/sections/RecentProject';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import TeamSlider from '@/components/sections/TeamSlider';
import Testimonials from '@/components/sections/Testimonials';
import ScrollingTextFullWidth from '@/components/sections/ScrollingTextFullWidth';
import FeaturedBlogGrid from '@/components/sections/FeaturedBlogGrid';
import Showcase from "@/components/sections/Showcase";
import TestimonialSlider2 from "@/components/sections/TestimonialSlider2";

const Home = () => {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider 
        wrapperCls="with-floating-header"
        slides={HeroSlidesData} 
        navigation={true} 
      />


                              {/* Service Section */}
      <OurServices data={OurServicesData} />
            <Showcase data={showcaseData} />

            {/* Scrolling Text */}
            <ScrollingTextFullWidth data={ScrollingTextData} />
      {/* Image Text */}
      {/* <ImageText data={ImageTextData} /> */}

      <ScrollAnimationDemo/>



      {/* Why Choose Us */}
      <WhyChooseUs data={WhyChooseUsData} />

      {/* Our Team */}
      {/* <TeamSlider 
        data={TeamSliderData} 
        pagination={true}
      /> */}

            {/* Testimonial Slider */}
            <TestimonialSlider2 
                data={TestimonialSlider2Data} 
                pagination={true} 
            />

      {/* Featured Blog */}
      {/* <FeaturedBlogGrid data={FeaturedBlogGridData} /> */}
    </>
  );
}

export default Home;
