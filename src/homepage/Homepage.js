import './homepage.css';
import Header from "../reusable-components/header/Header";
import landingMainPic from './../assets/images/home-bg.jpg';
import latestProd from './../prodImage/latest.json';
import products from './../prodImage/products.json';
import Card from '../reusable-components/card/Card';
import blogArticles from './../prodImage/blogArticles.json';
import BlogCard from '../reusable-components/blog-card/BlogCard';
import Footer from '../reusable-components/footer/Footer';

// spliting the blog articles into two
const Articles_1 = blogArticles.slice(0, 3);
const Articles_2 = blogArticles.slice(3);

function Homepage() {
    return <div className="homepage container-fluid">

        <div className="landing container border border-info p-0 mb-5">
            <Header />

            <div className="main border d-flex flex-column flex-lg-row align-items-start justify-content-between">
                <div className='text-wrap border order-2 order-lg-1'>

                    <h1 className="title text-uppercase title-text border">Doris Alluring</h1>
                    
                    <p className='detail d-block d-lg-none'>
                        Quos veniam voluptatum dolores soluta molestiae harum, 
                        ex doloribus! Aliquid nihil nulla temporibus suscipit 
                        veritatis ea vero quisquam repudiandae expedita fuga 
                        dignissimos quasi, at, quia fugiat labore itaque nam natus.
                    </p>
                </div>

                <img src={landingMainPic} alt='landing' className='main-image order-1 order-lg-2'/>
            </div>

        </div>

        <hr className="divider"/>

        <div className="product container border border-info p-0 mt-5">

            <div className='wrap d-flex flex-column flex-lg-row justify-content-between'>
                <div className='left'>
                    <h2 className='title text-uppercase tw-500 ts-28'>Our Latest Product</h2>
                    <p className='text tw-275 ts-20'>
                        Quos veniam voluptatum dolores soluta molestiae harum, ex doloribus! 
                        Aliquid nihil nulla temporibus suscipit veritatis ea vero quisquam 
                        repudiandae expedita fuga dignissimos quasi, at, quia fugiat labore 
                        itaque nam natus.
                    </p>
                    <button type='button' className='btn btn-dark w-25'>Shop</button>
                </div>

                <div className='right d-flex flex-column flex-lg-row align-items-center justify-content-between'>
                    {
                        latestProd.map(item => {
                            return <Card key={item.id} {...item} type="lp" />
                        })
                    }
                </div>
            </div>

            <div className='products py-5 d-none d-md-block'>

                <div className='product-gallery d-flex justify-content-between'>
                    {products.map(item => <Card key={item.id} {...item} type="prod-gallery" />)}
                </div>

                <div className='product-gallery d-flex mt-5 justify-content-between'>
                    {products.map(item => <Card key={item.id} {...item} type="prod-gallery" />)}
                </div>

            </div>

        </div>

        <hr className="divider"/>

        <section className='blog container py-5 border border-info' id='blog'>
            <h2 className='blog-title text-uppercase text-center ts-28 tw-500'>Blog</h2>
            
            <div className='articles d-flex justify-content-between mt-5'>
                    {
                        Articles_1.map((item, index) => {
                            let display = 'null';
                            let lastIndex = Articles_1.length - 1;
                            index === lastIndex && (display = 'd-none d-lg-block');
                            return <BlogCard key={item.id} {...item} displayClass={display} />
                        })
                    }
            </div>

            <div className='articles d-flex justify-content-between mt-5'>
                    {
                        Articles_2.map((item, index) => {
                            let display = 'null';
                            let lastIndex = Articles_2.length - 1;
                            index === lastIndex && (display = 'd-none d-lg-block');
                            return <BlogCard key={item.id} {...item} displayClass={display} />
                        })
                    }
            </div>
        </section>

        <hr className="divider last-divider"/>

        <Footer />
    </div>
}

export default Homepage;