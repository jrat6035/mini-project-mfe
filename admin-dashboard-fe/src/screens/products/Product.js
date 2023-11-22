import { Button, Card, Form, Input, InputNumber, Space } from "antd";
import { useEffect, useState } from "react";
import { getProductById, updateProduct } from "../../middleware/product";
import { useNavigate, useParams } from "react-router-dom";
import SubmitButton from "../../components/common/SubmitButton";

const Product = () => {
  const navigate = useNavigate();

  const productId = useParams();

  const [product, setProduct] = useState({});
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

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

  const handleCancel = () => {
    navigate("/edit-products");
  };

  const handleSave = async () => {
    await updateProduct({
      id: productId,
      name: productName,
      description: productDescription,
      price: productPrice,
      quantity: productQuantity,
    });
    navigate("/edit-products");
  };

  const [form] = Form.useForm();

  form.setFieldsValue({
    productname: productName,
    productdescription: productDescription,
    productprice: productPrice,
    productquantity: productQuantity,
  });
  return (
    <Card>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name="productname"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please Enter Product Name",
            },
          ]}
        >
          <Input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="productdescription"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please Enter Product Description",
            },
          ]}
        >
          <Input
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="productprice"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please Enter Product Price",
            },
          ]}
        >
          <InputNumber
            min={0}
            prefix="$"
            value={productPrice}
            onChange={setProductPrice}
          />
        </Form.Item>
        <Form.Item
          name="productquantity"
          label="Quantity"
          rules={[
            {
              required: true,
              message: "Please Enter Product Quantity",
            },
          ]}
        >
          <InputNumber
            min={1}
            value={productQuantity}
            onChange={setProductQuantity}
          />
        </Form.Item>
        <Form.Item>
          <Space>
            <SubmitButton form={form} onSubmit={handleSave} />
            <Button onClick={handleCancel}>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Product;
