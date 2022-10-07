import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import GradeIcon from '@mui/icons-material/Grade';
import EmailIcon from '@mui/icons-material/Email';
import { ReactElement } from 'react';
import { fontColor } from './constants';
import { Box } from '@mui/material';

export type SubLink = {
    name: string;
    link: string;
    element: ReactElement;
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
                link: "/dashboard/users",
                element: <Box>Dashboard Users</Box>
            },
            {
                name: "Products",
                link: "/dashboard/products",
                element: <Box>Dashboard Products</Box>
            },

            {
                name: "Services",
                link: "/dashboard/services",
                element: <Box>Dashboard Services</Box>
            },
        ]
    },
    {
        name: "Users",
        icon: <PeopleAltIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "All Users",
                link: "/users",
                element: <Box>All Users</Box>
            },
            {
                name: "Users Chat",
                link: "/users/chat",
                element: <Box>Users Chat</Box>
            },
        ]
    },
    {
        name: "Products",
        icon: <InventoryIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "All Products",
                link: "/products",
                element: <Box>All Products</Box>
            },
            {
                name: "Bids",
                link: "/products/bids",
                element: <Box>Products Bids</Box>
            },
        ]
    },
    {
        name: "Services",
        icon: <CleaningServicesIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "All Services",
                link: "/services",
                element: <Box>All Services</Box>
            },
            {
                name: "Bids",
                link: "/services/bids",
                element: <Box>Services Bids</Box>
            },
        ]
    },
    {
        name: "Ratings",
        icon: <EmailIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "All Ratings",
                link: "/ratings",
                element: <Box>Ratings</Box>
            },
        ]
    },
    {
        name: "Messages",
        icon: <HomeIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "All Messages",
                link: "/messages",
                element: <Box>Messages</Box>
            },
        ]
    },
];