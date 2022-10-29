import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import GradeIcon from '@mui/icons-material/Grade';
import EmailIcon from '@mui/icons-material/Email';
import { ReactElement } from 'react';
import { fontColor } from './constants';
import { Box } from '@mui/material';
import ProductsDashboardPage from './pages/dashboard/ProductsDashboard.page';
import ServicesDashboardPage from './pages/dashboard/ServicesDashboard.page';
import UserDashboardPage from './pages/dashboard/UsersDashboard.page';
import CategoryIcon from '@mui/icons-material/Category';
import ProductsCategoryPage from './pages/categories/ProductsCategory.page';
import ServiceCategoryPage from './pages/categories/ServicesCategory.page';
import AllUsersPage from './pages/users/AllUsers.page';
import AllProductsPage from './pages/products/AllProducts.page';
import AllServicesPage from './pages/services/AllServices.page';
import DashboardPage from './pages/dashboard/Dashboard.page';
import MessagesPage from './pages/messages/Messages.page';

export type SubLink = {
    name: string;
    link: string;
    element: ReactElement;
    unread?: number;
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
                name: "General",
                link: "/dashboard",
                element: <DashboardPage />
            },
            {
                name: "Users",
                link: "/dashboard/users",
                element: <UserDashboardPage />
            },
            {
                name: "Products",
                link: "/dashboard/products",
                element: <ProductsDashboardPage />
            },

            {
                name: "Services",
                link: "/dashboard/services",
                element: <ServicesDashboardPage />
            },
        ]
    },
    {
        name: "Categories",
        icon: <CategoryIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "Products",
                link: "/category/products",
                element: <ProductsCategoryPage />
            },
            {
                name: "Services",
                link: "/category/services",
                element: <ServiceCategoryPage />
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
                element: <AllUsersPage />
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
                element: <AllProductsPage />
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
                element: <AllServicesPage />
            },
            {
                name: "Bids",
                link: "/services/bids",
                element: <Box>Services Bids</Box>
            },
        ]
    },
    {
        name: "Highlighted",
        icon: <GradeIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "Highlighted",
                link: "/top",
                element: <Box>Highlighted</Box>
            },
        ]
    },
    {
        name: "Messages",
        icon: <EmailIcon sx={{ color: fontColor }} />,
        subLinks: [
            {
                name: "All Messages",
                link: "/messages",
                element: <MessagesPage />,
                unread: 4
            },
        ]
    },
];

export const backendUrl: string = "https://api.advella.popal.dev";