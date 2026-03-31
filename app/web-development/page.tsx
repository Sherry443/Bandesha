import { webData } from '@/data/sections/webData';
import { ScrollingTextGradientData } from "@/data/sections/scrollingTextGradientData";
import { webWorkingData } from "@/data/sections/webWorkingData";
import { webtextBannerData } from "@/data/sections/webtextBannerData";

import ServiceDetail1 from '@/components/sections/ServiceDetail1';
import ScrollingTextGradient from "@/components/sections/ScrollingTextGradient";
import WorkingProcess from "@/components/sections/WorkingProcess";
import TextBanner from "@/components/sections/TextBanner";


const Home4 = () => {
    return(
        <>
            {/* Why Choose Us */}
            <ServiceDetail1 data={webData} />

            {/* Working Process */}
            <WorkingProcess data={webWorkingData} />

            {/* Text Banner */}
            <TextBanner data={webtextBannerData} />

            {/* Scrolling Text */}
            <ScrollingTextGradient data={ScrollingTextGradientData} />



        </>
    )
}

export default Home4;