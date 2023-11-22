import React, { useContext, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { AuthContext } from "../../auth/AuthContext";
import { ROUTE_PATHS } from "../../routes/routes";
import { useSelector } from "react-redux";
import { USER_TYPE } from "../../constants/constants";

const { Sider } = Layout;

const SideBar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [collapsed, setCollapsed] = useState(false);
  const [userType, setUserType] = useState("");

  const localUser = useSelector((state) => state.user.localUser);

  useEffect(() => {
    if (localUser) {
      setUserType(localUser.userType);
    }
  }, [localUser]);

  const routesBeforeLogin = [
    { key: ROUTE_PATHS.USER_SIGNUP, label: "Sign Up", icon: <UserOutlined /> },
    { key: ROUTE_PATHS.USER_LOGIN, label: "Login", icon: <TeamOutlined /> },
  ];

  const routesAfterLogin = [
    {
      key: ROUTE_PATHS.USER_PROFILE,
      label: "View Profile",
      icon: <TeamOutlined />,
    },
    userType === USER_TYPE.customer && {
      key: ROUTE_PATHS.DISPLAY_PRODUCTS,
      label: "Display Products",
      icon: <ShopOutlined />,
    },
    userType === USER_TYPE.admin && {
      key: "Admin Products",
      label: "Product",
      icon: <ShopOutlined />,
      children: [
        { key: ROUTE_PATHS.EDIT_PRODUCTS, label: "Edit Products" },
        { key: ROUTE_PATHS.ADD_PRODUCT, label: "Add Product" },
      ],
    },
    {
      key: ROUTE_PATHS.VIEW_CART,
      label: "Orders",
      icon: <ShoppingCartOutlined />,
    },
  ];

  const routes = user ? routesAfterLogin : routesBeforeLogin;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        theme="dark"
        defaultSelectedKeys={user ? ROUTE_PATHS.VIEW_CART : ROUTE_PATHS.USER_LOGIN}
        mode="inline"
        items={routes}
        onClick={({ key }) => navigate(key)}
      />
    </Sider>
  );
};

export default SideBar;
