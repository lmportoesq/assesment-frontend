import Headers from '../componets/Headers/Headers';
import ProductCards from '../componets/ProductCards/ProductCards';
import Footer from '../componets/Footer/Footer';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../services/services';

import './HomePage.css';

function HomePage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            const allProducts = await getAllProducts();
            setProducts(allProducts);
        }
        fetchProducts();
    }, []);

    return (
        <div className='main-home'>
            <Headers />
            <h1 className='main-home__title'>Products</h1>
            <hr />
            <div className='main-home__card'>
                {products.map((product) => (
                    <ProductCards
                        key={product.id}
                        product={product}
                    />
                ))};
            </div>
            <div className='main-home__footer'>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;
