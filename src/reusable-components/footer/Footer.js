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

                    <div className='email bg-light d-flex align-items-center justify-content-center border border-light'>

                        <input type='email' name='email' placeholder='Email Address' className='ts-12 tw-600'/>
                        
                        <button type='submit' className='submit-btn btn btn-dark rounded-0'>
                            <svg className='submit-icon' width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.56923 9L2 1H15.12L9.56923 9Z" fill="#C92E81" stroke="#C92E81"/>
                            </svg>
                        </button>
                    </div>
                </form>

            </div>
        </div>

    </footer>
}

export default Footer;