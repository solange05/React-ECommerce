import React, { useEffect, useState } from 'react';
import { getProduct, getCategory } from './firebaseService';

const ProductComponent = () => {
    const [product, setProduct] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        // Obtener un producto específico
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await getProduct('1'); // Cambia '1' por el ID real del producto
                setProduct(fetchedProduct);
            } catch (error) {
                console.error(error.message);
            }
        }; 

        // Obtener productos de una categoría específica
        const fetchCategoryProducts = async () => {
            try {
                const fetchedCategoryProducts = await getCategory('telescopios'); 
                setCategoryProducts(fetchedCategoryProducts);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchProduct();
        fetchCategoryProducts();
    }, []);

    return (
        <div>
            <h1>Producto</h1>
            {product && <div>{product.title}</div>}
            <h2>Productos de la Categoría</h2>
            <ul>
                {categoryProducts.map(catProduct => (
                    <li key={catProduct.id}>{catProduct.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductComponent;