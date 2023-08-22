import './stocked-products.css';
import Card from "../card/Card";
import products from './../../prodImage/products.json';

function StockedProducts({margin}) {
    return <div className={`product-gallery d-flex justify-content-between ${margin}`}>
        {products.map(item => <Card key={item.id} {...item} type="prod-gallery" />)}
    </div>
}

export default StockedProducts;