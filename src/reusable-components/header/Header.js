import CustomButton from '../CustomButton';
import './header.css';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import MyAccount from '../../conditionalContents/MyAccount';
import MyNotification from '../../conditionalContents/MyNotification';
import MyFavorites from '../../conditionalContents/MyFavorites';
import MyCart from '../../conditionalContents/MyCart';
import MyOrder from '../../conditionalContents/MyOrder';
import { FaUserAlt,FaBell,FaCartPlus,FaShoppingBasket,FaHeart } from 'react-icons/fa';


function Header() {
    const navigate = useNavigate();
    const [selectedNavItem, setSelectedNavItem] = useState("");
    const [menuVisible, setMenuVisible] = useState(false);
    const handleButtonClick = (event) =>{
        const innerText = event.target.innerText;
       if(innerText === "Sign up"){
        navigate('/signup')
       }else{
        navigate('/login')
       }
        
    }
  
    const drop_down_selected = (value_to_save) =>{
      
      const key = 'displayState'
      sessionStorage.setItem(key, value_to_save.name)
    }
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    }
    const routePaths = {
      'My Account': '/my-account',
      'My Notification': '/my-notification',
      'My Cart': '/my-cart',
      'My Orders': '/my-orders',
      'My Favorites': '/my-favorites',
    };
    const navigationItems = [
      { name: 'My Account', icon: <FaUserAlt/> },
      { name: 'My Notification', icon: <FaBell/> },
      { name: 'My Cart', icon: <FaCartPlus/> },
      { name: 'My Orders', icon: <FaShoppingBasket/> },
      { name: 'My Favorites', icon: <FaHeart/> },
    ];
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
  }
    return(
        <>
        <header className="hero py-4 d-none d-lg-block mb-4 w-100 px-5">
        <div className="hero-wrap d-flex align-items-center justify-content-between">

            <div className="shop increase-gap d-none d-lg-flex align-items-center">
                <a href='/product' className="blog-link m-0 ts-16 tw-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="33" viewBox="0 0 24 33" fill="none">
                  <g clip-path="url(#clip0_180_675)">
                  <path d="M9 30.0474C9.55228 30.0474 10 29.4484 10 28.7095C10 27.9706 9.55228 27.3716 9 27.3716C8.44772 27.3716 8 27.9706 8 28.7095C8 29.4484 8.44772 30.0474 9 30.0474Z" stroke="#C92E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20 30.0474C20.5523 30.0474 21 29.4484 21 28.7095C21 27.9706 20.5523 27.3716 20 27.3716C19.4477 27.3716 19 27.9706 19 28.7095C19 29.4484 19.4477 30.0474 20 30.0474Z" stroke="#C92E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1.95117H5L7.68 19.866C7.77144 20.4819 8.02191 21.0352 8.38755 21.429C8.75318 21.8229 9.2107 22.032 9.68 22.02H19.4C19.8693 22.032 20.3268 21.8229 20.6925 21.429C21.0581 21.0352 21.3086 20.4819 21.4 19.866L23 8.64079H6" stroke="#C92E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_180_675">
                  <rect width="24" height="32.1101" fill="white" transform="translate(0 0.613281)"/>
                  </clipPath>
                  </defs>
                  </svg>
                </a>
                <a href="#blog" className="blog-link ts-16 tw-400 d-none d-lg-block">Blog</a>
                <div className='dropdown'>
                  <button className="btn "
                      type="button"
                      id="dropdownMenuButton"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false">
                      <a href='/userDashboard' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 41 42" fill="none">
                    <g clip-path="url(#clip0_201_16710)">
                    <path d="M20.4365 23.3126C26.7647 23.3126 31.8989 18.1784 31.8989 11.8501C31.8989 5.52193 26.7647 0.387726 20.4365 0.387726C14.1083 0.387726 8.97405 5.52193 8.97405 11.8501C8.97405 18.1784 14.1083 23.3126 20.4365 23.3126ZM30.6253 25.8598H26.2393C24.4722 26.6717 22.5061 27.1334 20.4365 27.1334C18.3669 27.1334 16.4087 26.6717 14.6336 25.8598H10.2477C4.61993 25.8598 0.0588379 30.4209 0.0588379 36.0486V37.3222C0.0588379 39.4316 1.77024 41.143 3.87964 41.143H36.9933C39.1027 41.143 40.8141 39.4316 40.8141 37.3222V36.0486C40.8141 30.4209 36.253 25.8598 30.6253 25.8598Z" fill="#C92E81"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_201_16710">
                    <rect width="40.7553" height="40.7553" fill="white" transform="translate(0.05896 0.387726)"/>
                    </clipPath>
                    </defs>
                    </svg>
                      </a>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {
                      navigationItems.map((item,index)=>(
                        <li key={index} className='dropdown-item px-2' onClick={() =>{ 
                            setSelectedNavItem(item)
                            drop_down_selected(item)
                          }
                        }>
                        <Link to="/userDashboard">
                        <span className="icon ">{item.icon}</span>
                        <span className="link-text">{item.name}</span>
                        </Link>
                        
                        </li>
                      ))
                    }
                    {/* <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li> */}
                  </ul>
                </div>
                
               
            </div>
           
            
            <div className=''>
            <h2 className="hero-title text-uppercase ts-24 tw-400">Doris Alluring</h2>
            <p className="mx-5 ts-12 tw-400">Home of nature</p>
            </div>
           
            
           
            <div className="menu d-flex align-items-center justify-content-between">
                
                <CustomButton  onClick={handleButtonClick}  text="Sign up" maxWidth="87px" width="100%" height="45px" />
                    <CustomButton onClick={handleButtonClick} text="Login" maxWidth="87px" width="100%" height="45px" color="black" backgroundColor="white"/>
           
              
           
              
             
            </div>
            
        </div>

        

        
    </header>
    <header className="hero py-4  px-2 d-lg-none w-100">
        <div className='d-flex justify-content-between'>
        
           <div className='small-screen-hero-title'>
            <h2 className="hero-title text-uppercase ts-24 tw-400">Doris Alluring</h2>
            <p className="motto text-center m-0 ts-12 tw-400">Home of nature</p>
            
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="33" viewBox="0 0 24 33" fill="none">
            <g clip-path="url(#clip0_180_675)">
            <path d="M9 30.0474C9.55228 30.0474 10 29.4484 10 28.7095C10 27.9706 9.55228 27.3716 9 27.3716C8.44772 27.3716 8 27.9706 8 28.7095C8 29.4484 8.44772 30.0474 9 30.0474Z" stroke="#C92E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 30.0474C20.5523 30.0474 21 29.4484 21 28.7095C21 27.9706 20.5523 27.3716 20 27.3716C19.4477 27.3716 19 27.9706 19 28.7095C19 29.4484 19.4477 30.0474 20 30.0474Z" stroke="#C92E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1.95117H5L7.68 19.866C7.77144 20.4819 8.02191 21.0352 8.38755 21.429C8.75318 21.8229 9.2107 22.032 9.68 22.02H19.4C19.8693 22.032 20.3268 21.8229 20.6925 21.429C21.0581 21.0352 21.3086 20.4819 21.4 19.866L23 8.64079H6" stroke="#C92E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_180_675">
            <rect width="24" height="32.1101" fill="white" transform="translate(0 0.613281)"/>
            </clipPath>
            </defs>
            </svg>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"   className="menu-icon" onClick={toggleMenu}>
                            <path d="M1.5 0.75H7.75C8.08152 0.75 8.39946 0.881696 8.63388 1.11612C8.8683 1.35054 9 1.66848 9 2C9 2.33152 8.8683 2.64946 8.63388 2.88388C8.39946 3.1183 8.08152 3.25 7.75 3.25H1.5C1.16848 3.25 0.850537 3.1183 0.616117 2.88388C0.381696 2.64946 0.25 2.33152 0.25 2C0.25 1.66848 0.381696 1.35054 0.616117 1.11612C0.850537 0.881696 1.16848 0.75 1.5 0.75ZM10.25 10.75H16.5C16.8315 10.75 17.1495 10.8817 17.3839 11.1161C17.6183 11.3505 17.75 11.6685 17.75 12C17.75 12.3315 17.6183 12.6495 17.3839 12.8839C17.1495 13.1183 16.8315 13.25 16.5 13.25H10.25C9.91848 13.25 9.60054 13.1183 9.36612 12.8839C9.1317 12.6495 9 12.3315 9 12C9 11.6685 9.1317 11.3505 9.36612 11.1161C9.60054 10.8817 9.91848 10.75 10.25 10.75ZM1.5 5.75H16.5C16.8315 5.75 17.1495 5.8817 17.3839 6.11612C17.6183 6.35054 17.75 6.66848 17.75 7C17.75 7.33152 17.6183 7.64946 17.3839 7.88388C17.1495 8.1183 16.8315 8.25 16.5 8.25H1.5C1.16848 8.25 0.850537 8.1183 0.616117 7.88388C0.381696 7.64946 0.25 7.33152 0.25 7C0.25 6.66848 0.381696 6.35054 0.616117 6.11612C0.850537 5.8817 1.16848 5.75 1.5 5.75Z" fill="#1E1E1E"/>
           </svg>
        </div>
        {menuVisible && (
          <div className='small-screen-menu'>
            <ul>
              <li><Link to="/signup" className='menu-link'>Sign up</Link></li>
              <li><Link to="/login" className='menu-link'>Login</Link></li>
              <li><Link to="/product" className='menu-link'>Shop</Link></li>
              <li><Link to="/blog" className='menu-link'>Blog</Link></li>
            </ul>
          </div>
        )}
     
   
     </header>
    </>
    );
    
 }

export default Header;
