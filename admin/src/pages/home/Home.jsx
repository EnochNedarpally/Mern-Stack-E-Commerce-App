import Charts from "../../components/charts/Charts"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./Home.css"
import { userData } from "../../dummyData"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import WidgetLarge from "../../components/widgetLarge/WidgetLarge"
import { useEffect, useMemo, useState } from "react"
import { userRequest } from "../../requestMethod"
const Home = () => {
     const [userStats, setUserStats] = useState([]);
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
        const getUserStats=async()=>{
            try {
                const res=await userRequest.get("/users/stats")
                const list=res.data.sort((a,b)=>a._id-b._id)
                list.map(
                    item=>{
                        return(
                            setUserStats((prev)=>[
                                ...prev,
                                {
                                    name:MONTHS[item._id-1],
                                    "Active User":item.total,
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
        getUserStats();
     },[MONTHS]);
    
    return (
        <div className="home">
            <FeaturedInfo/>
            <Charts data={userStats} title="User Analytics" dataKey="Active User" grid/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}

export default Home
