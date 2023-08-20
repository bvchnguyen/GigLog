import { dashboard, chart, file, earning, signout } from "./Icons"

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/account/dashboard',

    },
    {
        id: 2,
        title: 'Earnings',
        icon: earning,
        link: '/account/earnings',

    },
    {
        id: 3,
        title: 'Analytics',
        icon: chart,
        link: '/account/analytics',

    },
    {
        id: 4,
        title: 'Statements',
        icon: file,
        link: '/account/statements',

    }
]
export const settingItems = [
    {
        id: 5,
        title: 'Account',
        icon: dashboard,
        link: '/dashboard',

    },
    {
        id: 6,
        title: 'Set Goals',
        icon: earning,
        link: '/dashboard',

    },
    {
        id: 7,
        title: 'Settings',
        icon: chart,
        link: '/dashboard',

    },
    {
        id: 8,
        title: 'Support',
        icon: file,
        link: '/dashboard',

    },
    {
        id: 9,
        title: 'Signout',
        icon: signout,
        link: '/dashboard',

    }
]