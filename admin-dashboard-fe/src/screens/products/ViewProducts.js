import { SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table } from 'antd';
import ProductService, { getProducts } from '../../services/ProductService';

const ViewProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // ProductService.getProducts().then((res) => {
    //   setProducts(res.data);
    // })
    setProducts(getProducts(true))
  }, [])

  const productsData = []

  products.map((product) => {
    productsData.push({
      key: product.productId,
      name: product.productName,
      description: product.productDescription,
      price: product.productPrice,
      quantity: product.productQuantity,
      status: product.productStatus,
      date: product.productListedDate
    })
  })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '20%',
      sorter: (a, b) => a.age.length - b.age.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Price ($)',
      dataIndex: 'price',
      key: 'price',
      width: '10%',      
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      width: '10%',      
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: '15%',
    },
    {
      title: 'Date Updated',
      dataIndex: 'date',
      key: 'date',
      width: '15%',      
    },
    {
      title: 'Action',
      dataIndex: '',
      key: '',
      width: '15%',      
    },
  ];

  return <Table columns={columns} dataSource={productsData} />;
};

export default ViewProducts;