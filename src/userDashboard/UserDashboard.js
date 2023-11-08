import Header from "../reusable-components/header/Header";
import {FaUserAlt,FaBell,FaCartPlus,FaShoppingBasket,FaHeart} from "react-icons/fa";
import "./userDashboard.css";
import { useState } from "react";
import MyNotification from "../conditionalContents/MyNotification";
import MyAccount from "../conditionalContents/MyAccount";
import MyCart from "../conditionalContents/MyCart";
import MyFavorites from "../conditionalContents/MyFavorites";
import MyOrder from "../conditionalContents/MyOrder" 
import CustomButton from "../reusable-components/CustomButton";
import DashboardNavigation from "../reusable-components/header/DasboardNavigation";



const UserDashboard = () =>{
  const displayState = () =>{
    const key = 'displayState'
       let state_to_display =  sessionStorage.getItem(key)
      //  let state_to_display = JSON.parse(state_from_storage)
      
        if (state_to_display === ''|| state_to_display === null){
          return <MyAccount/>
        }
        else {
          let current_state = {name: state_to_display}
          
          switch (current_state.name) {
            
            case 'My Account':
              return <MyAccount/>;
            case 'My Notification':
              return <MyNotification/>
            case 'My Favorites':
              return <MyFavorites/>;
            case 'My Cart':
             
              return <MyCart/>
            
            case 'My Orders':
              return <MyOrder/>;
            default:
              return <MyAccount/>;
          }
          // return the_function(current_state)
        }
      //  sessionStorage.setItem(key , '')
  
  }
  const the_function=(boolean_state)=>{
    console.log('the current object ',  boolean_state);
    if (boolean_state) {
     
            
      switch (boolean_state.name) {
        case 'My Account':
          return <MyAccount/>;
        case 'My Notification':
          return <MyNotification/>
        case 'My Favorites':
          return <MyFavorites/>;
        case 'My Cart':
          return <MyCart/>
        case 'My Orders':
          return <MyOrder/>;
        default:
          return <MyAccount/>;
      }
    } 
  } 
    const [selectedNavItem, setSelectedNavItem] = useState( displayState());
    const [menuVisible, setMenuVisible] = useState(false);
   

    const toggleSideNav =() =>{
      setMenuVisible(!menuVisible);
    }

    const navigationItems = [
        { name: 'My Account', icon: <FaUserAlt/> },
        { name: 'My Notification', icon: <FaBell/> },
        { name: 'My Cart', icon: <FaCartPlus/> },
        { name: 'My Orders', icon: <FaShoppingBasket/> },
        { name: 'My Favorites', icon: <FaHeart/> },
      ];
      const [headerContent, setHeaderContent] = useState({
        title:navigationItems[0].name,
        icon:navigationItems[0].icon,
      });
  
       const handleNavigationItemClick = (item) => {
        setMenuVisible(false);
        setSelectedNavItem(item);
         setHeaderContent({
          title: item.name,
          icon: item.icon,
    });
  }

        const displayConditionalContent =()=>{
            if (selectedNavItem) {
          
                switch (selectedNavItem.name) {
                  case 'My Account':
                    return <MyAccount/>;
                  case 'My Notification':
                    return <MyNotification/>
                  case 'My Favorites':
                    return <MyFavorites/>;
                  case 'My Cart':
                    return <MyCart/>
                  case 'My Orders':
                    return <MyOrder/>;
                  default:
                    return <MyAccount/>;
                }
              } 
            // return the_function(selectedNavItem)
        }

    return(
        <>
       
      <div className="container-fluid d-lg-block d-none" id="my-container">
            <DashboardNavigation/>
            <div className="dashboard">
             <div className="side-nav">
                <div className="profile-part p-2">
                    <div className="name">
                        <h4 className="mx-3">Welcome,Ebele</h4>
                        
                    </div>
                </div>
                <ul >
                    {navigationItems.map((item, index) => (
                    <li key={index} className={`button-list ${item.name ===selectedNavItem.name ? 'active-item' : ''}`} onClick={() => setSelectedNavItem(item)} >
                        <button className="button-style" activeClassName="active">
                       <span className="icon ">{item.icon}</span>
                        <span className="link-text">{item.name}</span>
                        </button>
                    </li>
                    ))}
                </ul>
              
               
                   
             </div>

             <div className="dynamic-side">
                {displayConditionalContent()}
             </div>
            </div>
            
           
      </div>
        

      <div className="d-sm-block d-lg-none">
      <DashboardNavigation/>
      <div className="dashboard-sm ">
      
       
          <div className="heading-nav">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" onClick={toggleSideNav}>
            <path d="M23 12H5M23 8H5M23 16H5M23 20H5" stroke="#323438" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </div>
            <div className="dynamic-header ">
            <span className="link-text link-text-sm px-2">{headerContent.title}</span>
            </div>
            <div className="">
            <span className="icon icon-sm">{headerContent.icon}</span>
            </div>
          </div><hr/>
          {menuVisible && (<div className="side-nav-sm">
         <ul >
                  {navigationItems.map((item, index) => (
                    <li key={index} className="button-list" onClick={() => handleNavigationItemClick(item)} >
                        <button className="button-style" activeClassName="active">
                       <span className="icon">{item.icon}</span>
                        <span className="link-text">{item.name}</span>
                        </button>
                    </li>
                    ))} 
                </ul>
                <div className="logout-btn-div w-100">
                  <CustomButton   text="Logout" maxWidth="87px" width="100%" height="45px" />
                </div>
        </div>
      )}
          <div className="dynamic-side-sm">
          {displayConditionalContent()}
          </div>
      </div>
      </div>
        </>
    );
}
export default UserDashboard;