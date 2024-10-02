import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import { getProducts, getCategory } from './asyncMock'; 

const ItemListContainer = () => {
  const { id } = useParams(); 
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true); // inicia la carga
    if (id) {
      // Si hay un id (categoria) se obtiene los productos de esa categoría
      const filteredProducts = getCategory(id);
      setProducts(filteredProducts);
      setLoading(false);
    } else {
      // Si no hay id, se obtiene todos los productos
      getProducts.then((data) => {
        setProducts(data);
        setLoading(false);
      });
    }
  }, [id]); 

  if (loading) {
    return <h2 className="center-text">Cargando...</h2>; // Mensaje de carga centrado
  }

  return (
    <div>
      <h1 className="center-text">{id ? `Productos en la categoría: ${id}` : 'Todos los Productos'}</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>
            <Link to={`/item/${product.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;