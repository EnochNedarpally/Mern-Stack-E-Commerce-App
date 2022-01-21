import "./ProductList.css";

import { Link } from "react-router-dom";
import  {useDispatch, useSelector} from "react-redux";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { deleteProduct, getProduct } from "../../redux/apiCalls";

export default function ProductList() {
  const products=useSelector(state=>state.product.products);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    deleteProduct(dispatch,id);
  };
useEffect(()=>{
  getProduct(dispatch);
  
},[dispatch])

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 100 },
    
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[8]}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}