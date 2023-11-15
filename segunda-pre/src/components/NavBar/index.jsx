import { useState } from 'react';
import { BsFillBasket2Fill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { categories } from '../../data';

export default function NavBar () {
  const links = [
    {to: '/', text: 'Inicio'},
    ...categories.map((category) => (
      {to: `/categories/${category.id}`, text: category.name}
    )),
  ]

  const [items, setItems] = useState([])

  return (
    <nav className="flex flex-wrap gap-4 justify-between items-center p-2 md:py-3 md:px-6">
      <ul className='flex flex-wrap gap-x-4 gap-y-2'>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `text-xl flex font-bold px-3 py-2 rounded ring-violet-400 ring-1 hover:bg-violet-300 hover:ring-violet-500 ${
                  isActive ? 'bg-violet-400 ring-violet-600' : 'bg-violet-200'
                }`
              }
            >
              <span>{link.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex">
        <button className='flex items-center gap-2 px-3 py-2 rounded ring-violet-400 ring-1 bg-violet-200 hover:bg-violet-300 hover:ring-violet-500'>
          <BsFillBasket2Fill className="text-2xl text-violet-700" />
          <span className="mx-1 font-bold text-xl">{items.length}</span>
        </button>
      </div>
    </nav>
  )
}
