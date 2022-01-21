import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";



const UserList = () => {
    const [data, setData] = useState(userRows);
    const dispatch=useDispatch();
    const {users,error}=useSelector(state=>state.userList)
    useEffect(()=>{
        getUsers(dispatch);
    },[dispatch])
   
    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id!==id));
    }
    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'User', headerName: 'User name', width: 200,
            renderCell:(params)=>{
                return (
                    <div className="userListDetails">
                        <img src={params.row.img} alt={params.row.username} />
                        <span>{params.row.username}</span>
                    </div>
                )
            } },
        { field: 'email', headerName: 'Email Id', width: 200 },
        {
            field: 'action',
            headerName: 'Actions',
            width: 130, 
            renderCell:(params)=>{
    
                return(
                    <>
                        <Link to={"/user/"+params.row._id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row._id)}/>
                    </>
                )
            }
        },
        
    ];
    
    
    return (
        <div className="userListContainer">
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[7]}
                checkboxSelection
                disableSelectionOnClick
                getRowId={(row) => row._id}
            />
        </div>
    )
}

export default UserList
