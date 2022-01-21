import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";



const UserList = () => {
    const [data, setData] = useState(userRows);
    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id!==id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'User', headerName: 'User name', width: 180,
            renderCell:(params)=>{
                return (
                    <div className="userListDetails">
                        <img src={params.row.avatar} alt={params.row.username} />
                        <span>{params.row.username}</span>
                    </div>
                )
            } },
        { field: 'email', headerName: 'Email Id', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 130, 
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 159,
            renderCell:(params)=>{
                return (
                    <>
                        <span>&#8377;</span>
                        <span>{params.row.transaction}</span>
                    </>
                )
            }
        },
        {
            field: 'action',
            headerName: 'Actions',
            width: 130, 
            renderCell:(params)=>{
    
                return(
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
        
    ];
    
    
    return (
        <div className="userListContainer">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={7}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList
