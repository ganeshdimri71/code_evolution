export const routes = [
    {
        name: "Home",
        link: '/'
    },
    {
        name: "Service",
        link: '/service',

        subRoutes: [
            {
                name: "Web Development",
                link: '/service/web-development',
            },
            {
                name: "Mobile Development",
                link: '/service/mobile-development',
            },
            {
                name: "UI/UX Design",
                link: '/service/ui-ux-design',
            },
        ]
    },
    {
        name: "Product",
        link: '/product',
    },
    {
        name: "Contact Us",
        link: '/contact',
    },
]