import { getProduct } from '../services/services';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Headers from '../componets/Headers/Headers';
import Footer from '../componets/Footer/Footer';
import './ProductDetailPage.css'

function ProductDetailPage(){
    const {id}=useParams();
    const [product, setProduct] = useState([]);
  
    useEffect(() => {

        const fetchProduct = async () => {
           const product = await getProduct(id);
           setProduct(product);
           console.log(product);
        }
      fetchProduct();
    },[]);

    return(
      <div className='main-container'>
        <Headers />
        <div className='container-detail'>
            <img className='container-detail__image' src={product.image} />
            <h2 className='container-detail__tittle'>{product.title}</h2>
            <p>Price:{product.price}</p>
            <p>Description:{product.description}</p>
            <p>Category:{product.category}</p>
        </div>
        <Footer />
      </div>  
    )
}
export default ProductDetailPage;