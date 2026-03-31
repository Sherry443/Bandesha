import Icons from "../components/Icons";

export const MenuService = {
    title: "Our Services",
    menus: [
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
            path: '/search-engine-optimization'
        }
    ]
}

export const MenuContact = {
    title: "Quick Contact",
    menus: [
        {
            title: "Dubai",
            path: null,
            icon: <Icons.Location />
        },
        {
            title: "Contact us",
            path: "+923293445557",
            icon: <Icons.Phone />
        },
        {
            title: "Mail",
            path: "admin@bandeshatech.com  ",
            icon: <Icons.Envelope />
        }
    ]
}
