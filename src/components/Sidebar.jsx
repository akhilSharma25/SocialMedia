import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { FaWallet } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { AiFillProfile } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";


export const Sidebar=({bgColor,color})=>{
    return(
        <>
        
        <div className="side-bar-content" style={{
            backgroundColor:`${bgColor}`,
            color:`${color}`
        }}>
            <div className="top-content">
                <div className="items"><FaHome className="icons"/>Home</div>
                <div className="items"><IoIosNotifications className="icons"/>Notifications</div>
                <div className="items"><CiShop className="icons"/>Shop</div>
                <div className="items"><CiChat1 className="icons"/>Conversation</div>
                <div className="items"><FaWallet className="icons"/>Wallet</div>
                <div className="items"><FaYoutube className="icons"/>Subscription</div>
                <div className="items"><AiFillProfile className="icons"/>My Profile</div>
            </div>
            <div className="bottom-content items"><CiLogout className="icons"/>Log Out</div>
        </div>

        </>
    )
}