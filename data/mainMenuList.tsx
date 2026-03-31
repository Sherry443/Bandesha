import Icons from "../components/Icons";

const Menus = [
    {
        title: 'Home',
        path: '/',
      
    },
    {
        title: 'About Us',
        path: '/about-us'
    },
    {
        title: 'Services',
        path: '/services',
        megamenutwocolumn: [
            {
                title: 'WHY BANDESHA',
                path: '/about-us',
                dropdown: [
                    {
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'Search Engine Optimization',
                        text: 'Improve your search rankings, drive organic traffic, and attract high-intent customers through data-driven SEO strategies.',
                        path: '/search-engine-optimization'
                    },
                    {
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'Performance Marketing',
                        text: 'Scale your business with ROI-focused ad campaigns across Google, Meta, and other platforms that convert clicks into revenue.',
                        path: '/performance-marketing'
                    },
                    {
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'Web Development',
                        text: 'Build fast, secure, and conversion-optimized websites tailored to your business goals and user experience.',
                        path: '/web-development'
                    }
                ]
            },
            {
                title: 'WHY BANDESHA',
                path: '/about-us',
                dropdown: [
                    {
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'Business Branding',
                        text: 'Create a strong brand identity that builds trust, increases recognition, and positions your business for long-term growth.',
                        path: '/business-branding'
                    },
                    {
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'Leads Generation',
                        text: 'Generate consistent, qualified leads using targeted funnels, landing pages, and high-converting marketing strategies.',
                        path: '/leads-generation'
                    },
                    {
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'UI/UX',
                        text: 'Design intuitive and engaging user experiences that improve usability, boost conversions, and retain customers.',
                        path: '/user-experience'
                    }
                ]
            }
        ],
        bottommenu: [
            {
                title: 'Contact Sales',
                path: '/contact-us',
                icon: <Icons.Contact />
            }
        ]
    },
    

    {
        title: 'Case Studies',
        path: '/projects', 
    },
    {
        title: 'Free Brand Audit',
        path: '/contact-us'
    }
]

export default Menus;