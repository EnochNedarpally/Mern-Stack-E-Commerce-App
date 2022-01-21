import { useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {useDispatch, useSelector} from "react-redux";

import "./NewProduct.css";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState();
  const [cat, setCat] = useState([]);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {error}=useSelector(state=>state.product);
  const handleInputChange=(e)=>{
    setInputs(prev=>{
     return {
        ...prev,
        [e.target.name]:e.target.value,
      }

    })
  }
  const handleCat=(e)=>{
    setCat(e.target.value.split(","));
  }
  const handleCreate=(e)=>{
    e.preventDefault();
    const fileName=new Date()+file.name;
    console.log(fileName);
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);
          const product={...inputs,img:downloadURL,categories:cat}
          console.log(product);
          addProduct(dispatch,product);
          !error && navigate("/products")
        });

      }
    );
  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={(e)=>setFile(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" name="title" onChange={handleInputChange}  placeholder="Product Name" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" name="desc"  onChange={handleInputChange} placeholder="Product Description" />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" onChange={handleCat}  placeholder="fashion,casual" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" name="price" onChange={handleInputChange}  placeholder="Price" />
        </div>
        <div className="addProductItem">
          <label>In Stock</label>
          <select name="inStock"  onChange={handleInputChange} id="">
            <option value="true">YES</option>
            <option value="false">NO</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleCreate}>Create</button>
      </form>
    </div>
  );
}