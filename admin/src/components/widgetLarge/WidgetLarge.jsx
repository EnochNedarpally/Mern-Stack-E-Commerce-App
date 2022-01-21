import { format } from "timeago.js";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";
import "./WidgetLarge.css"
const WidgetLarge = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        
        const getOrders = async () => {
            try {
                const res = await userRequest.get("/orders/");
                 setOrders(res.data);
            } catch (error) {
                
            }
            
        }
        getOrders();
    }, [])
    const Button = ({ type }) => {
        return <button className={"statusButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLargeContainer">
            <h3 className="widgetLargeTitle">Lates Transaction</h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">
                        Customer Id
                    </th>
                    <th className="widgetLargeTh">
                        Date
                    </th>
                    <th className="widgetLargeTh">
                        Amount
                    </th>
                    <th className="widgetLargeTh">
                        Status
                    </th>
                </tr>
                {orders.map(order => {
                    return (
                        <tr className="widgetLargeTr" key={order._id}>
                            <td className="widgetLargeUserDetails">
                                {/* <img src="https://randomuser.me/api/portraits/men/28.jpg" alt="" /> */}
                                <span>{order.userId}</span>
                            </td>
                            <td className="widgetLargeDate">
                                {format(order.createdAt)}
                            </td>
                            <td className="widgetLargeAmount">
                                &#8377; {order.amount}
                            </td>
                            <td className="widgetLargeTd">
                                <Button type={order.status} />
                            </td>
                        </tr>
                    )
                })}

            </table>
        </div>
    )
}

export default WidgetLarge