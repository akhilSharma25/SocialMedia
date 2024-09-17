import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";

export const NavBar = ({bgColor,color,toggleButton,toggle}) => {
  return (
    <>
      <div className="nav-bar" >
        <div className="logo" style={{
            backgroundColor:`${bgColor}`,
            color:`${color}`,

        }}>WDM <div onClick={toggleButton}>
          {toggle ?(
            <FaToggleOn/>
          ):(
            <FaToggleOff/>
          )}
       
          </div>
          </div>
        <div className="search" style={{
            backgroundColor:`${bgColor}`,
            color:`${color}`,

        }}>
          <div className="left">
            <FcSearch /> Search Here...
          </div>
          <div className="right">
            <IoFilter />
            Filters
          </div>
        </div>
        <div className="seller" style={{
            backgroundColor:`${bgColor}`,
            color:`${color}`,

        }}>Become a Seller</div>
      </div>
    </>
  );
};
