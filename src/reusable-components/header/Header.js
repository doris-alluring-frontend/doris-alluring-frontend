import './header.css';

function Header() {
    return <header className="hero py-4">
        <div className="hero-wrap d-flex align-items-center justify-content-between border">

            <div className="shop d-flex align-items-center justify-content-between d-none d-lg-block">
                <p className="shop-text m-0 ts-16 tw-400">shop</p>
                <span className="search">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                        <path d="M19.8829 19.3175L14.6182 14.0528C16.0938 12.4296 16.8759 10.2938 16.7976 8.10158C16.7193 5.90939 15.7867 3.83477 14.1992 2.32103C12.6116 0.807285 10.4949 -0.025511 8.3015 0.000595774C6.10807 0.0267026 4.01184 0.909642 2.46074 2.46074C0.909642 4.01184 0.0267026 6.10807 0.000595774 8.3015C-0.025511 10.4949 0.807285 12.6116 2.32103 14.1992C3.83477 15.7867 5.90939 16.7193 8.10158 16.7976C10.2938 16.8759 12.4296 16.0938 14.0528 14.6182L19.3175 19.8829C19.3924 19.9579 19.4941 20 19.6002 20C19.7062 20 19.8079 19.9579 19.8829 19.8829C19.9579 19.8079 20 19.7062 20 19.6002C20 19.4941 19.9579 19.3924 19.8829 19.3175ZM0.819201 8.41151C0.819201 6.9099 1.26448 5.442 2.09874 4.19345C2.93299 2.9449 4.11875 1.97178 5.50606 1.39713C6.89337 0.822488 8.41994 0.672135 9.8927 0.965086C11.3655 1.25804 12.7183 1.98113 13.7801 3.04294C14.8419 4.10474 15.565 5.45756 15.8579 6.93033C16.1509 8.40309 16.0005 9.92965 15.4259 11.317C14.8512 12.7043 13.8781 13.89 12.6296 14.7243C11.381 15.5585 9.91313 16.0038 8.41151 16.0038C6.39856 16.0017 4.46865 15.2011 3.04527 13.7778C1.6219 12.3544 0.821317 10.4245 0.819201 8.41151Z" fill="black"/>
                    </svg>
                </span>
            </div>

            <h2 className="hero-title text-uppercase ts-24 tw-400">Doris Alluring</h2>

            <div className="menu d-flex align-items-center justify-content-between">
                <a href="#blog" className="blog-link ts-16 tw-400 d-none d-lg-block">Blog</a>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
                    <path d="M1.5 0.75H7.75C8.08152 0.75 8.39946 0.881696 8.63388 1.11612C8.8683 1.35054 9 1.66848 9 2C9 2.33152 8.8683 2.64946 8.63388 2.88388C8.39946 3.1183 8.08152 3.25 7.75 3.25H1.5C1.16848 3.25 0.850537 3.1183 0.616117 2.88388C0.381696 2.64946 0.25 2.33152 0.25 2C0.25 1.66848 0.381696 1.35054 0.616117 1.11612C0.850537 0.881696 1.16848 0.75 1.5 0.75ZM10.25 10.75H16.5C16.8315 10.75 17.1495 10.8817 17.3839 11.1161C17.6183 11.3505 17.75 11.6685 17.75 12C17.75 12.3315 17.6183 12.6495 17.3839 12.8839C17.1495 13.1183 16.8315 13.25 16.5 13.25H10.25C9.91848 13.25 9.60054 13.1183 9.36612 12.8839C9.1317 12.6495 9 12.3315 9 12C9 11.6685 9.1317 11.3505 9.36612 11.1161C9.60054 10.8817 9.91848 10.75 10.25 10.75ZM1.5 5.75H16.5C16.8315 5.75 17.1495 5.8817 17.3839 6.11612C17.6183 6.35054 17.75 6.66848 17.75 7C17.75 7.33152 17.6183 7.64946 17.3839 7.88388C17.1495 8.1183 16.8315 8.25 16.5 8.25H1.5C1.16848 8.25 0.850537 8.1183 0.616117 7.88388C0.381696 7.64946 0.25 7.33152 0.25 7C0.25 6.66848 0.381696 6.35054 0.616117 6.11612C0.850537 5.8817 1.16848 5.75 1.5 5.75Z" fill="#1E1E1E"/>
                </svg>
            </div>
        </div>

        <p className="motto text-center m-0 ts-12 tw-400">Home of nature</p>

        
    </header>
}

export default Header;