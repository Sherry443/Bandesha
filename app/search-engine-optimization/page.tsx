import { SeoData } from '@/data/sections/seoData';
import { ScrollingTextGradientData } from "@/data/sections/scrollingTextGradientData";
import { seoWorkingData } from "@/data/sections/seoWorkingData";
import { seotextBannerData } from "@/data/sections/seotextBannerData";

import ServiceDetail1 from '@/components/sections/ServiceDetail1';
import ScrollingTextGradient from "@/components/sections/ScrollingTextGradient";
import WorkingProcess from "@/components/sections/WorkingProcess";
import TextBanner from "@/components/sections/TextBanner";


const Home4 = () => {
    return(
        <>
            {/* Why Choose Us */}
            <ServiceDetail1 data={SeoData} />

            {/* Working Process */}
            <WorkingProcess data={seoWorkingData} />

            {/* Text Banner */}
            <TextBanner data={seotextBannerData} />

            {/* Scrolling Text */}
            <ScrollingTextGradient data={ScrollingTextGradientData} />



        </>
    )
}

export default Home4;