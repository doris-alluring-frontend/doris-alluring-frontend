import Footer from "../reusable-components/footer/Footer";
import Header from "../reusable-components/header/Header";
import StockedProducts from "../reusable-components/stock-products/StockedProduct";
// import SubmitBtn from "../reusable-components/submit-btn/SubmitBtn";
import './product.css';

function Product() {
    return <div className='product-page container-fluid p-0'>

        <div className='wrap container'>
            <Header />

            <main className="product-display container">
                <h1 className="title ts-36 tw-300 text-uppercase">All Products</h1>

                {/* filter form wrapper */}
                <div className="filter d-flex align-items-center justify-content-between">

                    
                    <div className="dropdown d-flex align-items-center justify-content-between border ps-3 pe-5">
                        <p className="text ts-12 tw-400 m-0">Filter By</p>
                        <svg className="drop-icon" width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.56923 9L2 1H15.12L9.56923 9Z" fill="#C92E81" stroke="#C92E81"/>
                        </svg>
                    </div>

                    <form className="search-form d-flex border position-relative">
                        <input type="text" name="search-input" placeholder="Search" className="user-input ts-12 tw-400 ps-3 pe-5" />
                        <svg className="submit-icon position-absolute" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.8829 19.3175L14.6182 14.0528C16.0938 12.4296 16.8759 10.2938 16.7976 8.10158C16.7193 5.90939 15.7867 3.83477 14.1992 2.32103C12.6116 0.807285 10.4949 -0.025511 8.3015 0.000595774C6.10807 0.0267026 4.01184 0.909642 2.46074 2.46074C0.909642 4.01184 0.0267026 6.10807 0.000595774 8.3015C-0.025511 10.4949 0.807285 12.6116 2.32103 14.1992C3.83477 15.7867 5.90939 16.7193 8.10158 16.7976C10.2938 16.8759 12.4296 16.0938 14.0528 14.6182L19.3175 19.8829C19.3924 19.9579 19.4941 20 19.6002 20C19.7062 20 19.8079 19.9579 19.8829 19.8829C19.9579 19.8079 20 19.7062 20 19.6002C20 19.4941 19.9579 19.3924 19.8829 19.3175ZM0.819201 8.41151C0.819201 6.9099 1.26448 5.442 2.09874 4.19345C2.93299 2.9449 4.11875 1.97178 5.50606 1.39713C6.89337 0.822488 8.41994 0.672135 9.8927 0.965086C11.3655 1.25804 12.7183 1.98113 13.7801 3.04294C14.8419 4.10474 15.565 5.45756 15.8579 6.93033C16.1509 8.40309 16.0005 9.92965 15.4259 11.317C14.8512 12.7043 13.8781 13.89 12.6296 14.7243C11.381 15.5585 9.91313 16.0038 8.41151 16.0038C6.39856 16.0017 4.46865 15.2011 3.04527 13.7778C1.6219 12.3544 0.821317 10.4245 0.819201 8.41151Z" fill="black"/>
                        </svg>
                    </form>

                </div>

                <div className="products py-5">
                    <StockedProducts />
                    <StockedProducts margin={`mt-5`}/>
                    <StockedProducts margin={`mt-5`}/>
                    <StockedProducts margin={`mt-5`}/>
                </div>
            </main>
        </div>

        <Footer />
    </div>
}

export default Product;