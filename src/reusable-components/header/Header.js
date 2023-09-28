import CustomButton from '../CustomButton';
import './header.css';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const navigate = useNavigate();
    const [menuVisible, setMenuVisible] = useState(false);
    const handleButtonClick = (event) =>{
        const innerText = event.target.innerText;
       if(innerText === "Sign up"){
        navigate('/signup')
       }else{
        navigate('/login')
       }
        
    }
  

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    }
    return(
        <>
        <header className="hero py-4 d-none d-lg-block mb-4">
        <div className="hero-wrap d-flex align-items-center justify-content-between">

            <div className="shop increase-gap d-none d-lg-flex align-items-center">
                <a href='/product' className="blog-link m-0 ts-16 tw-400">shop</a>
                <a href="#blog" className="blog-link ts-16 tw-400 d-none d-lg-block">Blog</a>
            </div>
            
            <h2 className="hero-title text-uppercase ts-24 tw-400">Doris Alluring</h2>
            

            <div className="menu d-flex align-items-center justify-content-lg-between">
                
                <CustomButton  onClick={handleButtonClick}  text="Sign up" maxWidth="87px" width="100%" height="45px" />
                    <CustomButton onClick={handleButtonClick} text="Login" maxWidth="87px" width="100%" height="45px" color="black" backgroundColor="white"/>
           
              
           
              
             
            </div>
            
        </div>

        <p className="motto text-center m-0 ts-12 tw-400">Home of nature</p>

        
    </header>
    <header className="hero py-4 d-lg-none">
        <div className='d-flex justify-content-between'>
        
           <div className='small-screen-hero-title'>
            <h2 className="hero-title text-uppercase ts-24 tw-400">Doris Alluring</h2>
            <p className="motto text-center m-0 ts-12 tw-400">Home of nature</p>
          </div>
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
