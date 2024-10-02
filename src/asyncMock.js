const products = [
    {
      id: 1,
      title: 'Remera',
      price: '1000',
      category: 'indumentaria',
      description: 'talles: XL, L, M, S, XS',
      image:
        'https://www.lailalenceria.com.ar/web/image/product.template/28961/image_256/%5BDIS80753%5D%20%2A%2A%2A%20INV.%20REMERA%20DE%20JERSEY%20ML%20ESTAMPADA%20%22AVENGERS%22%20CON%20PU%C3%91OS?unique=98d8c79',
    },
    {
      id: 2,
      title: 'Neumatico',
      price: '2000',
      category: 'repuestos',
      description: 'Tamaños disponibles: 205/55 R16, 215/60 R16, 225/65 R17',
      image:
        'https://images.pricely.ar/images/29745825/7798164988359.jpg',
    },
    {
      id: 3, 
      title: 'Teclado Gamer',
      price: '3000',
      category: 'electronica',
      description: 'Colores: verde, rojo y violeta',
      image:
        'https://www.toptecnouy.com/imgs/productos/productos31_27018.jpg',
    },
  ];
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  
  export const getProduct = (id) => {
    const product = products.find((prod) => prod.id === id); // comparación estricta
    if (!product) {
      throw new Error(`Producto con ID ${id} no encontrado`); // Manejo de error
    }
    return product;
  };
  
  export const getCategory = (category) => {
    return products.filter((product) => product.category === category);
  };