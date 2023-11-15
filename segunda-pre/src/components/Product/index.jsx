export default function Product({product}) {
  const {id, title, description, price, pictureUrl} = product;
  
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={pictureUrl} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}</p>
        <button className="btn btn-primary" onClick={() => addToCart({id, title, price})}>Agregar al carrito</button>
      </div>
    </div>
  )
}
