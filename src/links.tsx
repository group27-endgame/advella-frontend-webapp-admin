import HomeIcon from '@mui/icons-material/Home';
import { ReactElement } from 'react';
import { fontColor } from './constants';

export type SubLink = {
    name: string;
    link: string;
};

export type MainLink = {
    name: string;
    icon: ReactElement;
    subLinks: SubLink[];
}

export const links: MainLink[] = [
    {
        name: "Home",
        icon: <HomeIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Home",
                link: "/"
            } 
        ]
    },
    {
        name: "Home",
        icon: <HomeIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Home",
                link: "/"
            } 
        ]
    },
    {
        name: "Home",
        icon: <HomeIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Home",
                link: "/"
            } 
        ]
    },
    {
        name: "Home",
        icon: <HomeIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Home",
                link: "/"
            } 
        ]
    },
    {
        name: "Home",
        icon: <HomeIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Home",
                link: "/"
            } 
        ]
    },
];