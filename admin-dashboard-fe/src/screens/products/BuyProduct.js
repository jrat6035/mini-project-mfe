import React, { useContext, useEffect, useState } from "react";
import { Button, Descriptions, InputNumber, Space } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../middleware/product";
import TextArea from "antd/es/input/TextArea";
import { AuthContext } from "../../auth/AuthContext";
import { placeOrder } from "../../middleware/order";

const BuyProduct = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const productId = useParams();

  const [product, setProduct] = useState({});
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [orderDescription, setOrderDescription] = useState("");

  useEffect(() => {
    async function fetchData() {
      const productData = await getProductById(productId.productId);
      setProduct(productData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setProductName(product.productName);
    setProductDescription(product.productDescription);
    setProductPrice(product.productPrice);
    setProductQuantity(product.productQuantity);
  }, [product]);

  const borderedItems = [
    {
      key: "1",
      label: "Product",
      children: productName,
    },
    {
      key: "2",
      label: "Amount",
      children: `$${productPrice}`,
    },
    {
      key: "3",
      label: "Quantity",
      children: productQuantity,
    },
    {
      key: "4",
      label: "Description",
      children: productDescription,
    },
  ];

  const handleCancel = () => {
    navigate("/display-products");
  };

  const AddToCart = async () => {
    try {
      const result = await placeOrder(
        user.email,
        productId.productId,
        orderQuantity,
        orderDescription
      );
      navigate("/view-cart");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Descriptions
        style={{ marginBottom: "30px" }}
        bordered
        title="Product Details"
        items={borderedItems}
      />
      <p style={{ fontWeight: "bold" }}>Order Description:</p>

      <TextArea
        value={orderDescription}
        onChange={(e) => setOrderDescription(e.target.value)}
      />
      <p style={{ fontWeight: "bold" }}>Select Quanitity:</p>
      <Space size={"middle"}>
        <InputNumber
          min={1}
          max={productQuantity}
          defaultValue={1}
          onChange={setOrderQuantity}
        />

        <Button type="primary" onClick={AddToCart}>
          Place Order
        </Button>
        <Button danger onClick={handleCancel}>
          Back
        </Button>
      </Space>
    </div>
  );
};
export default BuyProduct;
