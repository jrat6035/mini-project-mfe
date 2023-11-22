import React from "react";
import {Layout } from "antd";
import SideBar from "../components/common/SideBar";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
    return (
        <Layout className="main-layout">
            <SideBar />
            <Layout>
                <Header title="Admin" className="main-header"></Header>
                <Content className="main-container">{children}</Content>
                <Footer className="main-footer"></Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
