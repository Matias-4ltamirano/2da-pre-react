
import { Link } from 'react-router-dom';
import { Main } from '../components/Main';
import { categories } from '../data';

export default function Home() {
  return (
    <Main pageTitle={`Inicio`}>
        <ul className="flex flex-wrap justify-around gap-y-8">
        {categories.map((categorie) => (
          <li key={categorie.id}>
            <Link to={`/categories/${categorie.id}`} className="max-w-sm h-full justify-center flex flex-col items-center gap-2 p-2 bg-white shadow rounded hover:scale-105 transition-transform">
              <img src={categorie.image} alt={categorie.name} className='w-3/4'/>
              <h3>{categorie.title}</h3>
              <p>{categorie.description}</p>
              <div>
                <p>{categorie.price}</p>
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
  )
}
