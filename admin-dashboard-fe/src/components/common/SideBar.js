import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

const { Sider } = Layout;

const SideBar = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
        >
            <Menu
                theme="dark"
                defaultSelectedKeys={["/"]}
                mode="inline"
                items={routes}
                onClick={({ key }) => navigate(key)}
            />
        </Sider>
    );
};

export default SideBar;
