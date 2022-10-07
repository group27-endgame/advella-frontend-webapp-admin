import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import GradeIcon from '@mui/icons-material/Grade';
import EmailIcon from '@mui/icons-material/Email';
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
        name: "Dashboard",
        icon: <EqualizerIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "Users",
                link: "/"
            },
            {
                name: "Products",
                link: "/"
            },

            {
                name: "Services",
                link: "/"
            },
        ]
    },
    {
        name: "Users",
        icon: <PeopleAltIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "All Users",
                link: "/"
            },
            {
                name: "Users Chat",
                link: "/"
            },
        ]
    },
    {
        name: "Products",
        icon: <InventoryIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "All Products",
                link: "/"
            },
            {
                name: "Bids",
                link: "/"
            },
        ]
    },
    {
        name: "Services",
        icon: <CleaningServicesIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "All Services",
                link: "/"
            },
            {
                name: "Bids",
                link: "/"
            },
        ]
    },
    {
        name: "Ratings",
        icon: <EmailIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "All Ratings",
                link: "/"
            },
        ]
    },
    {
        name: "Messages",
        icon: <HomeIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "All Messages",
                link: "/"
            },
        ]
    },
];