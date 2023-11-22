import React, { useEffect, useState } from "react";
import { Button, Popconfirm, Space, Table } from "antd";
import { getProducts, removeProduct } from "../../middleware/product";
import { Link } from "react-router-dom";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  const handleConfirm = async (key) => {
    await removeProduct(key);
    const updatedData = await getProducts();
    setProducts(updatedData);
  };

  useEffect(() => {
    const updatedProductsData = products.map((product) => ({
      key: product.productId,
      name: product.productName,
      description: product.productDescription,
      price: product.productPrice,
      quantity: product.productQuantity,
      status: product.productStatus,
      date: product.productUpdatedDate,
    }));
    setProductsData(updatedProductsData);
  }, [products]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "15%",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "20%",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      width: "10%",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "10%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "15%",
    },
    {
      title: "Date Updated",
      dataIndex: "date",
      key: "date",
      width: "15%",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "",
      width: "15%",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/product/${record.key}`}>Edit</Link>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleConfirm(record.key)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={productsData} />;
};

export default ViewProducts;
