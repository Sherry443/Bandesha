import { pmData } from '@/data/sections/pmData';
import { ScrollingTextGradientData } from "@/data/sections/scrollingTextGradientData";
import { pmWorkingData } from "@/data/sections/pmWorkingData";
import { pmtextBannerData } from "@/data/sections/pmtextBannerData";

import ServiceDetail1 from '@/components/sections/ServiceDetail1';
import ScrollingTextGradient from "@/components/sections/ScrollingTextGradient";
import WorkingProcess from "@/components/sections/WorkingProcess";
import TextBanner from "@/components/sections/TextBanner";


const Home4 = () => {
    return(
        <>
            {/* Why Choose Us */}
            <ServiceDetail1 data={pmData} />

            {/* Working Process */}
            <WorkingProcess data={pmWorkingData} />

            {/* Text Banner */}
            <TextBanner data={pmtextBannerData} />

            {/* Scrolling Text */}
            <ScrollingTextGradient data={ScrollingTextGradientData} />



        </>
    )
}

export default Home4;