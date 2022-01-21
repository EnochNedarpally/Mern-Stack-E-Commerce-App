import { Visibility } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { userRequest } from "../../requestMethod";
import "./WidgetSmall.css"
const WidgetSmall = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const getUsers=async()=>{
            try {
                const res = await userRequest.get("/users?new=true")
                setUsers(res.data.filter(user=>user.isAdmin!==true));
            } catch (error) {
                
            }
        }
        getUsers();
    },[])
    return (
        <div className="widgetSmallContainer">
            <h3 className="widgetSmallTitle">New Join Members</h3>
            {users.map(
                user=>{
                    return(
                        <div className="widgetSmallMemberDetails" key={user._id}>
                        <img src={user.img} alt="Profile" className="widgetSmallImage" />
                        <div className="widgetSmallMember">
                            <p className="widgetSmallName">{user.username}</p>
                        </div>
                        <button className="widgetSmallButton">
                            <Visibility className="visibilityIcom"/>
                            Display
                        </button>
                    </div>
                    )
                }
            )}
        </div>
    )
}

export default WidgetSmall
