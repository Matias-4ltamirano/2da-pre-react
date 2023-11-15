import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Main } from '../components/Main';
import { categories, products } from '../data';



function getProductsByCategorie(id) {
  return products.filter(product => product.categoryId === id)
}

export default function Product() {
  const {categoryId} = useParams();
  const [catId, setCatId] = useState(parseInt(categoryId?? 1))

  useEffect(() => {setCatId(parseInt(categoryId?? 1))}, [categoryId])

  const [category, setCategory] = useState(categories.find(category => category.id === catId))
  const [products, setProducts] = useState(getProductsByCategorie(catId))

  useEffect(() => {
    setCategory(categories.find(categorie => categorie.id === catId))
    setProducts(getProductsByCategorie(catId))
  }, [catId])

  return <Main pageTitle={`Categoria: ${category?.name}`}>
    <ul className="flex flex-wrap justify-around gap-y-8">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`} className="max-w-sm h-full flex flex-col justify-center items-center gap-2 p-2 bg-white shadow rounded hover:scale-105 transition-transform">
              <img src={product.image} alt={product.name} className='w-3/4'/>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div>
                <p>{product.price}</p>
              </div>
            </Link>
          </li>
        ))}
        {categories.length === 0 ? (
          <li>
            <h3>No hay categorias</h3>
          </li>
        ) : null}
        </ul>
  </Main>
}
