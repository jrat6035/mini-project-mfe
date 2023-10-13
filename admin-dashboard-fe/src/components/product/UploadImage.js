import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Upload } from 'antd';
const UploadImage = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size="large"
  >
    <Upload
  action="../image"
  listType="picture"
  maxCount={1}
  accept='.png, .jpg, .jpeg'
>
  <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
</Upload>

  </Space>
);
export default UploadImage;