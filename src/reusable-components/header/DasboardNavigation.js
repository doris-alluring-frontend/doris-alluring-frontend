import "./dashboardHeader.css";
import "./header.css";
import {FaUserAlt,FaBell,FaCartPlus,FaShoppingBasket,FaHeart} from "react-icons/fa";
import CustomButton from "../CustomButton"

const DashboardNavigation = ()=>{

    const navigationIcons= [
        { name: 'My Account', icon: <FaUserAlt/> },
        { name: 'My Notification', icon: <FaBell/> },
        { name: 'My Cart', icon: <FaCartPlus/> },
        { name: 'My Orders', icon: <FaShoppingBasket/> },
        { name: 'My Favorites', icon: <FaHeart/> },
      ];
    return(
        <div className=" hero mb-4 dashboard-nav">
            <div className='logo-div '>
            <p className=" text-uppercase logo"><a href="/" className="home-redirection">Doris Alluring  <br/><span className="sub-logo">Home of nature</span></a> </p> 
            {/* <p className="m-0">Home of nature</p> */}
            </div>
            <div className="icon-div">
            <ul className="mx-3">
            <button className="icon-btn pb-2" >
                 <span className="icon-sm "><FaUserAlt/></span>  
            </button>
            <button className="icon-btn pb-2" >
                 <span className="icon-sm "><FaBell/></span>  
            </button>
            <button className="icon-btn pb-2" >
                 <span className="icon-sm "><FaCartPlus/></span>  
            </button>
            <button className="icon-btn pb-2" >
                 <span className="icon-sm my-4"><FaShoppingBasket/></span>  
            </button>
            <button className="icon-btn pb-2" >
                 <span className="icon-sm  "><FaHeart/></span>  
            </button>
                      
            
            </ul>
           
            </div>
            <div className="logout-btn-div d-none d-lg-block">
                  <CustomButton   text="Logout" maxWidth="87px" width="100%" height="45px" />
            </div>
      </div>
    )
   
}
export default DashboardNavigation;