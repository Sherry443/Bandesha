import { businessData } from '@/data/sections/businessData';
import { ScrollingTextGradientData } from "@/data/sections/scrollingTextGradientData";
import { businessWorkingData } from "@/data/sections/businessWorkingData";
import { businesstextBannerData } from "@/data/sections/businesstextBannerData";

import ServiceDetail1 from '@/components/sections/ServiceDetail1';
import ScrollingTextGradient from "@/components/sections/ScrollingTextGradient";
import WorkingProcess from "@/components/sections/WorkingProcess";
import TextBanner from "@/components/sections/TextBanner";


const Home4 = () => {
    return(
        <>
            {/* Why Choose Us */}
            <ServiceDetail1 data={businessData} />

            {/* Working Process */}
            <WorkingProcess data={businessWorkingData} />

            {/* Text Banner */}
            <TextBanner data={businesstextBannerData} />

            {/* Scrolling Text */}
            <ScrollingTextGradient data={ScrollingTextGradientData} />



        </>
    )
}

export default Home4;