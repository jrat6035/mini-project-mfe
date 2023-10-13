import {
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    DashboardOutlined,
} from "@ant-design/icons";

export const BASE_URL = "http://localhost:8080";

export const API_ROUTE_PATHS = {
    PRODUCTS_BASE_URL: `${BASE_URL}/api/v1/products`,
}

export const ROUTE_PATHS = {
    DEFAULT: "/",
    ADD_PRODUCT: "/add-product",
    VIEW_PRODUCTS: "/view-products",
    VIEW_USERS: "/view-users",
    VIEW_ADMINS: "/view-admins",
    ADD_ADMIN: "/add-admin"
};

export default [
    {
        key: ROUTE_PATHS.DEFAULT,
        label: "Dashboard",
        icon: <DashboardOutlined />,
    },
    {
        key: "sub1",
        label: "User",
        icon: <UserOutlined />,
        children: [
            {
                key: ROUTE_PATHS.VIEW_USERS,
                label: "View Users",
            },
        ],
    },
    {
        key: "sub2",
        label: "Admin",
        icon: <TeamOutlined />,
        children: [
            {
                key: ROUTE_PATHS.VIEW_ADMINS,
                label: "View Admins",
            },
            {
                key: ROUTE_PATHS.ADD_ADMIN,
                label: "Add Admin",
            },
        ],
    },
    {
        key: "sub3",
        label: "Product",
        icon: <ShopOutlined />,
        children: [
            {
                key: ROUTE_PATHS.VIEW_PRODUCTS,
                label: "View Products",
            },
            {
                key: ROUTE_PATHS.ADD_PRODUCT,
                label: "Add Product",
            },
        ],
    },
];
