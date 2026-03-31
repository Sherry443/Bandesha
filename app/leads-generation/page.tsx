import { leadsData } from '@/data/sections/leadsData';
import { ScrollingTextGradientData } from "@/data/sections/scrollingTextGradientData";
import { leadsWorkingData } from "@/data/sections/leadsWorkingData";
import { leadstextBannerData } from "@/data/sections/leadstextBannerData";

import ServiceDetail1 from '@/components/sections/ServiceDetail1';
import ScrollingTextGradient from "@/components/sections/ScrollingTextGradient";
import WorkingProcess from "@/components/sections/WorkingProcess";
import TextBanner from "@/components/sections/TextBanner";


const Home4 = () => {
    return(
        <>
            {/* Why Choose Us */}
            <ServiceDetail1 data={leadsData} />

            {/* Working Process */}
            <WorkingProcess data={leadsWorkingData} />

            {/* Text Banner */}
            <TextBanner data={leadstextBannerData} />

            {/* Scrolling Text */}
            <ScrollingTextGradient data={ScrollingTextGradientData} />



        </>
    )
}

export default Home4;