import React, { useContext, useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { AuthContext } from "../../auth/AuthContext";
import { ROUTE_PATHS } from "../../constants/routes";

const { Sider } = Layout;

const SideBar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [collapsed, setCollapsed] = useState(false);

  const routes = [
    {
      key: ROUTE_PATHS.USER_SIGNUP,
      label: "Sign Up",
      icon: <UserOutlined />,
    },
    user
      ? {
          key: ROUTE_PATHS.USER_PROFILE,
          label: "View Profile",
          icon: <TeamOutlined />,
        }
      : {
          key: ROUTE_PATHS.USER_LOGIN,
          label: "Login",
          icon: <TeamOutlined />,
        },
    user && {
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
    user && {
      key: ROUTE_PATHS.VIEW_CART,
      label: "Cart",
      icon: <ShoppingCartOutlined />,
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        theme="dark"
        defaultSelectedKeys={ROUTE_PATHS.USER_SIGNUP}
        mode="inline"
        items={routes}
        onClick={({ key }) => navigate(key)}
      />
    </Sider>
  );
};

export default SideBar;
