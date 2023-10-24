import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { getProduct, getProducts } from "../../utils/productUtils";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
      console.log(data);
    }

    fetchData();
  }, []);

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
    console.log(productsData[0]);
  }, [products]);

  console.log(productsData);

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
          <a
            onClick={() => {
              console.log(record.key);
            }}
          >
            Edit
          </a>
          <a
            onClick={() => {
              getProduct(record.key);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={productsData} />;
};

export default ViewProducts;
