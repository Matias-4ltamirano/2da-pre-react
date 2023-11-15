import {products} from '../data';

export default function Productos(){

  return (
    <main>
      <ul>
      {products.map((product) => (
        <li key={product.id}>
          <a href={`/products/${product.id}`}>
            <img src={product.pictureUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div>
              <p>{product.price}</p>
            </div>
          </a>
        </li>
      ))}
      </ul>
    </main>
  )
}
