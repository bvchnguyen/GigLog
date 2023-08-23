import { dashboard, chart, file, earning, signout, goal, profile, setting } from "./Icons";

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

    },
    {
        id: 5,
        title: 'Set Goals',
        icon: goal,
        link: '/accout/set-goals',

    },
]
export const dropDownItems = [
    {
        id: 1,
        title: 'Profile',
        icon: profile,
        link: '/dashboard',

    },
    {
        id: 2,
        title: 'Settings',
        icon: setting,
        link: '/dashboard',

    },
    {
        id: 3,
        title: 'Sign out',
        icon: signout,
        link: '/logout',

    },
]