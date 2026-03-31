import Logo from "./Logo";
import LogoImage from "@/public/img/whitelogo.png";
import Social from "./Social";

const FooterBrand = () => {
    return (
        <div
            className="footer-widget footer-widget-brand"
            data-aos="fade-up"
            data-aos-anchor=".footer-top"
        >
            <Logo 
                src={LogoImage.src}
                width={189}
                height={32}
                url="/"
                cls="footer-logo"
                alt="Consulo logo"
                ariaLabel="Consulo logo" 
                loading="lazy"
            />
            <p className="text text-16">
            Bandesha is a leading growth marketing and technology company, empowering businesses with innovative solutions and data-driven strategies.
            </p>
            <Social 
                wrapperCls="social-icons"
                aos="fade-up"
                aosAnchor=".footer-top"
            />
        </div>
    )
}

export default FooterBrand;