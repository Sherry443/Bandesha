import "@/styles/running-content.css";
import { SectionProps } from "@/types/sectionProps";
import Subheading from "../Subheading";
import Heading from "../Heading";
import Link from "next/link";
import Image from "next/image";

const ScrollingTextFullWidth = ({ data }: { data: SectionProps }) => {
    const {
        wrapperCls,
        imageList,
        subheading,
        heading
    } = data || {};

    return (
        <div className={`running-content ${wrapperCls}` }>
            <div className="content-inner">
            <div className="multicolumn-header section-headings">
                    {subheading && 
                        <Subheading 
                            title={subheading}
                            cls="text-20"
                            aos="fade-up"
                        />
                    }

                    {heading && 
                        <Heading 
                            title={heading}
                            cls="text-50"
                            aos="fade-up"
                        />
                    }
                </div>
                <div className="content-lists running-animation">
                    {Array.from({ length: 6 }).map((_, i) => (                            
                        <div className="content-item" key={i}>
                            {imageList && imageList.map((item, index) => (
                                <Link 
                                    href={item.href ? item.href : ''} 
                                    className="content-link" 
                                    key={`scroll-img-${index}`}
                                >
                                    <Image
                                        src={item.src}
                                        width={item.width}
                                        height={item.height}
                                        loading={item.loading}
                                        alt={item.alt ? item.alt : "Brand image"}
                                    />
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default ScrollingTextFullWidth;