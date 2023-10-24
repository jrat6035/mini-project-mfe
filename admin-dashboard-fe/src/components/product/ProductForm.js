import { Button, Card, Form, Input, InputNumber, Space } from "antd";
import { useState } from "react";
import { saveProduct } from "../../utils/productUtils";
import SubmitButton from "../common/SubmitButton";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

  const [form] = Form.useForm();
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
            <SubmitButton
              form={form}
              onSubmit={() => saveProduct({
                name: productName,
                description: productDescription,
                price: productPrice,
                quantity: productQuantity
              })}
            />
            {/* <button type="submit" onClick={() => {saveProduct(
                productName,
                productDescription,
                productPrice,
                productQuantity
              )}}></button> */}
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>

    </Card>
  );
};

export default ProductForm;
