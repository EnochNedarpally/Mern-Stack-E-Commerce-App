import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../requestMethod";
import "./FeaturedInfo.css";


export default function FeaturedInfo() {
  const [income, setIncome] = useState("");
  const [per, setPer] = useState(0);
  useEffect(()=>{
    const getIncome=async()=>{
      try {
        const res=await userRequest.get("/orders/income");
        console.log(res.data);
        setIncome(res.data);
        
      } catch (error) {
        
      }
    }
    getIncome();
  },[])
  
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">&#8377; 91,415</span>
          <span className="featuredMoneyRate">
            -9.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">&#8377; 81,505</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">&#8377; 70,115</span>
          <span className="featuredMoneyRate">
            +1.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}