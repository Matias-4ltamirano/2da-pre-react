import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Main } from '../components/Main';
import { products } from '../data';

function getProductById(id) {
  return products.find(product => product.id === id)
}

export default function Product() {
  const {productId} = useParams();

  const [product, setProduct] = useState(getProductById(parseInt(productId)))

  useEffect(() => {
    setProduct(getProductById(parseInt(productId)))
  }, [productId])

  
  return <Main pageTitle={`Producto: ${product.name}`}>
    <div className='h-full flex flex-col gap-4 md:flex-row justify-center items-center md:h-max md:pt-16'>
      <img src={product.image} alt={product.name} className='w-2/4 md:w-2/5 max-w-lg'/>
      <div className='flex flex-col items-center [&>*]:mt-[1em]'>
        <p className='text-2xl font-bold'>{product.name}</p>
        <p className='text-lg font-medium'>{product.description}</p>
        <p className='text-2xl font-medium'>Precio: <span className='font-extrabold text-violet-600'>$ {product.price}</span></p>
      </div>
    </div>
  </Main>
}
