import "@/styles/ServiceDet.css";
import { SectionProps } from "@/types/sectionProps";
import Heading from "../Heading";
import Subheading from "../Subheading";
import Text from "../Text";
import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";


const ServiceDetail1 = ({ data }: { data: SectionProps }) => {
    const {
        wrapperCls,
        container,
        subheading,
        heading,
        text,
        button,
        image,
        promotions,
        rotatingLogo,
        promoImage,
        backgroundImage,
    } = data || {};

    return (
        <div className={`why-choose-us`}>
            {backgroundImage &&
                <div className="media media-bg">
                    <Image
                        src={backgroundImage.src}
                        alt={backgroundImage.alt ? backgroundImage.alt : "Background image"}
                        width={backgroundImage.width}
                        height={backgroundImage.height}
                        loading={backgroundImage.loading}
                    />
                </div>
            }
            <div className={container}>
                <div className="choose-top">
                    <div className="grid grid-cols-2 lg:gap-1">
                        <div className="col-span-2 lg:col-span-1">
                            {image && 
                                <picture className="choose-media radius18 servicedt" data-aos="fade-right">
                                    {image.srcMobile &&
                                        <source
                                            media="(max-width: 575px)"
                                            srcSet={image.srcMobile}
                                        />
                                    }
                                <Image 
                                    src={image.src}
                                    alt={image.alt ? image.alt : 'Image'}
                                    width={image.width}
                                    height={image.height}
                                    loading={image.loading}
                                />
                                </picture>
                            }
                        </div>
                        
                        <div className="col-span-2 lg:col-span-1">
                            <div className="choose-us-content section-headings">
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

                                {text &&
                                    <Text 
                                        text={text}
                                        cls="text-18"
                                        aos="fade-up"
                                    />
                                }
                                
                                {button &&
                                    <div className="buttons" data-aos="fade-up">
                                        {button.type == 'primary' &&
                                            <PrimaryButton 
                                                label={button.label}
                                                href={button.href}
                                                ariaLabel={button.label}
                                            />
                                        }

                                        {button.type == 'secondary' &&
                                            <SecondaryButton 
                                                label={button.label}
                                                href={button.href}
                                                ariaLabel={button.label}
                                            />
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ServiceDetail1;