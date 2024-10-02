import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from './asyncMock'; 
import './App.css'; 

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchedProduct = getProduct(parseInt(id)); // obtiene el producto por ID
    if (fetchedProduct) {
      setProduct(fetchedProduct);
    }
    setLoading(false); // finaliza la carga
  }, [id]); 

  if (loading) {
    return <h2 className="center-text">Cargando...</h2>; // Mensaje de carga centrado
  }

  if (!product) {
    return <h2 className="center-text">Producto no encontrado</h2>; // Mensaje si no se encuentra el producto
  }

  return (
    <div className="item-detail">
      <h1 className="center-text">{product.title}</h1>
      <img src={product.image} alt={product.title} className="item-image" />
      <p className="item-price">Precio: ${product.price}</p>
      <p className="item-description">{product.description}</p>
      <Link to="/" className="back-button">Volver a la lista</Link>
    </div>
  );
};

export default ItemDetailContainer;