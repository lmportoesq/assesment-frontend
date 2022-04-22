import Timer from '../Timer/Timer';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Swal from 'sweetalert2';

import './ProductCards.css';
function ProductCards({product}){
    const {id,title,image} = product
    const [endTimer,setEndTimer]=useState(false);
    
    let randomNumber=getRandomInt(1,3);
    let url;
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function handleClick(){
        if(!endTimer){
            console.log('Verdadero')
            url="";
            Swal.fire({
                type:'error',
                title:'Error',
                text:'Lo siento, tiempo agotado..!'
            });  
        }else{
            console.log('False')
            url=`product-detail/${id}`; 
        }    
    }

    return (
        <div className="main-cards">
            <h1 className='main-cards__title'>{title}</h1>   
            <div className="main-cards__timer">
                <Timer time={randomNumber} setEndTimer={setEndTimer} />
            </div>
            <img className='main-cards__image'src={image} alt=""/>
            <Link to={url} className='main-cards__link' onClick={handleClick}>View detail</Link>
            <p className='main-cards__timeout'>Time out</p>
        </div>
    )
}

export default ProductCards;
