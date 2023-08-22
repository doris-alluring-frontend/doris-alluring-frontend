import './footer.css';

function Footer() {
    return <footer className="footer container-fluid px-0">

        <div className="wrap container-fluid py-5">

            <div className="footer-main container d-flex justify-content-between align-items-center">
                <div className='about'>
                    <h5 className='title text-light ts-16 tw-700'>About Us</h5>
                    <small className='text-wrap d-block'>
                        <p className='text text-light ts-14 tw-300'>
                        We are one of the leading companies that has made 
                        automation ofWe are one of the leading companies
                        </p>
                    </small>

                    <small className='copywright-wrap mt-4 d-block'>
                        <p className='copywright text-light ts-12 tw-500'>
                            © 2021 Name + Name. All rights reserved
                        </p>
                    </small>

                </div>

                <div className='quick-access'>
                    <h5 className='title text-light ts-16 tw-700'>Quick Access</h5>
                    <nav className='nav flex-column'>
                        <li className='nav-item nav-link px-0 py-1 ts-14 tw-500'><a href='#jal' className='text-light'>Working Process</a></li>
                        <li className='nav-item nav-link px-0 py-1 ts-14 tw-500'><a href='#jal' className='text-light'>Our Mission</a></li>
                        <li className='nav-item nav-link px-0 py-1 ts-14 tw-500'><a href='#jal' className='text-light'>News & Article</a></li>
                    </nav>
                </div>

                <form className='email-form'>
                    <h5 className='title text-light ts-16 tw-700'>News Letter</h5>

                    <div className='email bg-light d-flex align-items-center justify-content-center border border-light rounded-3'>

                        <input type='email' name='email' placeholder='Email Address' className='ts-12 tw-600 rounded-3'/>
                        
                        <button type='submit' className='submit-btn btn btn-dark rounded-3'>
                            <svg className='submit-icon' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.75 6.75H9.645L6.9225 10.02C6.85946 10.0958 6.81199 10.1834 6.78277 10.2775C6.75356 10.3717 6.74318 10.4707 6.75223 10.5689C6.77052 10.7673 6.86684 10.9502 7.02 11.0775C7.17316 11.2048 7.37062 11.2661 7.56894 11.2478C7.76726 11.2295 7.9502 11.1332 8.0775 10.98L11.8275 6.48C11.8527 6.44421 11.8753 6.40661 11.895 6.3675C11.895 6.33 11.9325 6.3075 11.9475 6.27C11.9815 6.18401 11.9993 6.09247 12 6C11.9993 5.90754 11.9815 5.816 11.9475 5.73C11.9475 5.6925 11.91 5.67 11.895 5.6325C11.8753 5.5934 11.8527 5.55579 11.8275 5.52L8.0775 1.02C8.00698 0.935339 7.91868 0.867254 7.81886 0.820589C7.71905 0.773923 7.61018 0.749822 7.5 0.750001C7.32476 0.749659 7.15493 0.810691 7.02 0.922501C6.94406 0.985463 6.88128 1.06279 6.83527 1.15005C6.78925 1.23731 6.7609 1.33279 6.75185 1.43102C6.74279 1.52926 6.7532 1.62831 6.78249 1.72251C6.81177 1.81672 6.85935 1.90422 6.9225 1.98L9.645 5.25H0.75C0.551088 5.25 0.360322 5.32902 0.21967 5.46967C0.0790178 5.61032 0 5.80109 0 6C0 6.19891 0.0790178 6.38968 0.21967 6.53033C0.360322 6.67098 0.551088 6.75 0.75 6.75Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </form>

            </div>
        </div>

    </footer>
}

export default Footer;