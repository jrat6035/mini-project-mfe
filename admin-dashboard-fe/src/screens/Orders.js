import React, { useContext, useEffect, useState } from "react";
import { Button, Popconfirm, Space, Table } from "antd";
import {
  approveOrder,
  getOrders,
  getOrdersByUserEmail,
} from "../middleware/order";
import { AuthContext } from "../auth/AuthContext";
import { useSelector } from "react-redux";
import { ORDER_STATUS, USER_TYPE } from "../constants/constants";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [userType, setUserType] = useState("");

  const localUser = useSelector((state) => state.user.localUser);

  useEffect(() => {
    if (localUser) {
      setUserType(localUser.userType);
    }
  }, [localUser]);

  useEffect(() => {
    async function fetchData() {
      if (localUser) {
        const data =
          localUser.userType === USER_TYPE.admin
            ? await getOrders()
            : await getOrdersByUserEmail(localUser.userEmail);
        setOrders(data);
      }
    }
    fetchData();
  }, [localUser]);

  const handleConfirm = async (key) => {
    await approveOrder(key);
    const updatedData = await getOrders();
    setOrders(updatedData);
  };

  useEffect(() => {
    const updatedOrdersData = orders.map((order) => ({
      key: order.id,
      name: order.userEmail,
      description: order.description,
      price: order.totalPrice,
      product: order.productName,
      quantity: order.productQuantity,
      status: order.approved ? ORDER_STATUS.approved : ORDER_STATUS.notApproved,
      date:
        userType === USER_TYPE.admin ? order.createdDate : order.approvedDate,
    }));
    setProductsData(updatedOrdersData);
  }, [orders]);

  const columns = [
    {
      title: "Customer Email",
      dataIndex: "name",
      key: "name",
      width: "15%",
    },
    {
      title: "Order Description",
      dataIndex: "description",
      key: "description",
      width: "20%",
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      width: "12%",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "10%",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      width: "10%",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "15%",
    },
    {
      title: userType === USER_TYPE.admin ? "Order Date" : "Approved Date",
      dataIndex: "date",
      key: "date",
      width: "15%",
    },
  ];

  const adminColumn = {
    title: "Action",
    dataIndex: "",
    key: "",
    width: "15%",
    render: (_, record) => (
      <Space size="middle">
        <Popconfirm
          title="Approve Order"
          description="Are you sure to approve the order?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => handleConfirm(record.key)}
        >
          <Button type="primary" disabled={record.status === ORDER_STATUS.approved}>
            Approve
          </Button>
        </Popconfirm>
      </Space>
    ),
  };

  return (
    <Table
      columns={
        userType === USER_TYPE.admin ? [...columns, adminColumn] : columns
      }
      dataSource={productsData}
    />
  );
};

export default Orders;
