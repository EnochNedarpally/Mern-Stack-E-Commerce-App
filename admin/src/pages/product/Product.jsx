import { Link, useLocation } from "react-router-dom";
import "./Product.css";
import {productData} from "../../dummyData"
import { Publish } from "@mui/icons-material";
import Charts from "../../components/charts/Charts";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethod";


export default function Product() {
    const location  = useLocation();
    const productId= location.pathname.split("/")[2];
    const products=useSelector(state=>state.product.products)
    const product=products.find(p=>p._id===productId);
    const [productStats, setProductStats] = useState([]);
    const [inputs, setInputs] = useState({});
    // const [file, setFile] = useState();
    const [cat, setCat] = useState([]);
    const MONTHS= useMemo(
       () => [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Agu",
         "Sep",
         "Oct",
         "Nov",
         "Dec",
       ],
       []
     );
     useEffect(()=>{
        const getProductStats=async()=>{
            try {
                const res=await userRequest.get("orders/income?pid=" + productId);
                const list=res.data.sort((a,b)=>a._id-b._id)
                list.map(
                    item=>{
                        return(
                            setProductStats((prev)=>[
                                ...prev,
                                {
                                    name:MONTHS[item._id-1],
                                    "Sales":item.total,
                                }
                            ]
                            )
                )
                    }
                )
                
            } catch (error) {
                console.log(error);
            }
           
        }
        getProductStats();
     },[MONTHS,productId]);
    
     const handleProductUpdate=(e)=>{
         e.preventDefault();
        const productInput={...inputs,...cat}
        const prod=JSON.parse(JSON.stringify(product))
        const updatedProduct={...prod,...productInput}
        console.log(updatedProduct);
     }
     const handleInputChange=(e)=>{
         setInputs(prev=>{
             return{
                 ...prev,
                 [e.target.name]:e.target.value,
             }
         })
     }
     const handleCatChange=(e)=>{
         setCat({[e.target.name]:e.target.value.split(",")})
     }
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Charts data={productStats} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price:</span>
                      <span className="productInfoValue" value={product.price}>{product.price}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock ? "Yes":"No"}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" name="title" onChange={handleInputChange} placeholder={product.title} />
                  <label>Product Description</label>
                  <input type="text" name="desc" onChange={handleInputChange} placeholder={product.desc} />
                  <label>Product Price</label>
                  <label>Categories</label>
                  <input type="text" name="categories" onChange={handleCatChange} placeholder={product.categories} />
                  <input type="number" name="price" onChange={handleInputChange} placeholder={product.price} />
                  <label>In Stock</label>
                  <select name="inStock" onChange={handleInputChange} id="idStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt={product.title} className="productUploadImg" />
                      <label htmlFor="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton" onClick={handleProductUpdate}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}