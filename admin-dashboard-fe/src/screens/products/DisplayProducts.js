import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { getProducts } from "../../middleware/product";
import { useNavigate } from "react-router-dom";

const DisplayProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
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
  }, [products]);

  const handleView = (key) => {
    navigate(`/view-product/${key}`);
  };

  return (
    <Row gutter={16}>
      {productsData.map((product) => (
        <Col span={6} key={product.key}>
          <Card
            style={{
              width: "100%",
              marginBottom: "10px",
              height: "300px",
              position: "relative",
            }}
            hoverable
            title={product.name}
          >
            <div>
              <p style={{ marginBottom: "5px" }}>
                Description: {product.description}
              </p>
              <p style={{ marginBottom: "5px" }}>Price: ${product.price}</p>
              <p style={{ marginBottom: "5px" }}>
                Quantity: {product.quantity}
              </p>
            </div>
            <Button
              onClick={() => handleView(product.key)}
              style={{ position: "absolute", bottom: "20px", left: "20px" }}
            >
              View Product
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DisplayProducts;
