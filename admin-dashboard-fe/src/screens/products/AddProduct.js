import React from "react";
import ProductForm from "../../components/product/ProductForm";
import ImageUploader from "../../components/product/ImageUploader";

const AddProduct = () => {
    return (
        <>
            <ProductForm />
            <ImageUploader />
        </>
    );
};

export default AddProduct;

// import React, { useState } from 'react';
// import axios from 'axios';

// function AddProduct() {
//   const [productInfo, setProductInfo] = useState({
//     name: '',
//     description: '',
//     image: null, // for the file
//   });

//   const uniqueFileName = `ds.png`;


//   const saveImage = (file, fileName) => {
//     const formData = new FormData();
//     formData.append('file', file, fileName);
  
//     fetch(`../images/${fileName}`, {
//       method: 'POST', // Use PUT or POST as needed
//       body: formData,
//     })
//     .then(response => {
//       if (response.ok) {
//         console.log('Image saved successfully');
//       } else {
//         console.error('Image save failed');
//       }
//     })
//     .catch(error => {
//       console.error('Error saving image:', error);
//     });
//   };
  
//   // Call this function when you want to save the image

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setProductInfo({ ...productInfo, image: file });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a FormData object to send the file
//     const formData = new FormData();
//     formData.append('name', productInfo.name);
//     formData.append('description', productInfo.description);
//     formData.append('image', productInfo.image);

//     saveImage(productInfo.image, uniqueFileName);


//     console.log(productInfo)

//     // try {
//     //   const response = await axios.post('/api/product', formData, {
//     //     headers: {
//     //       'Content-Type': 'multipart/form-data',
//     //     },
//     //   });
//     //   console.log('Product saved:', response.data);
//     // } catch (error) {
//     //   console.error('Error saving product:', error);
//     // }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Product Name"
//         value={productInfo.name}
//         onChange={(e) => setProductInfo({ ...productInfo, name: e.target.value })}
//       />
//       <textarea
//         placeholder="Product Description"
//         value={productInfo.description}
//         onChange={(e) => setProductInfo({ ...productInfo, description: e.target.value })}
//       />
//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       <button type="submit">Save Product</button>
//     </form>
//   );
// }

// export default AddProduct;

