interface MenuType {
  title: string;
  path: string;
}

export const QuickLink: MenuType[] = [
    {
        title: 'About Us',
        path: '/about-us'
    },
    {
        title: 'Blogs',
        path: '/'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Case Studies',
        path: '/'
    }
];

export const Services: MenuType[] = [
    {
        title: 'UI/UX Design',
        path: '/user-experience'
    },
    {
        title: 'Performance Marketing',
        path: '/performance-marketing'
    },
    {
        title: 'Web Development',
        path: '/web-development'
    },
    {
        title: 'Search Engine Optimization',
        path: '/search-engine-optimizationt'
    }
];

export const Information: MenuType[] = [
    {
        title: 'Working Process',
        path: '/services'
    },
    {
        title: 'Privacy Policy',
        path: '/privacy-policy'
    },
    {
        title: 'Terms & Conditions',
        path: '/terms-condition'
    },
    {
        title: 'FAQ',
        path: '/faq'
    }
];

export const MenuContact: MenuType[] = [
    {
        title: 'consulo@yourcompany.com',
        path: 'mailto:consulo@yourcompany.com'
    },
    {
        title: '+1 (437) 555-0198',
        path: 'tel:+1 (437) 555-0198'
    },
    {
        title: '123 Maple Avenue, Toronto, ON M5H 2N2, Canada',
        path: '#'
    }
];

export const MenuPolicies: MenuType[] = [
    {
        title: 'Privacy Policy',
        path: '/privacy-policy'
    },
    {
        title: 'FAQ',
        path: '/faq'
    },
    {
        title: 'Contact',
        path: '/contact-us'
    }
];
