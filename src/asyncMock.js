const products = [
  {
    id: 1,
    title: 'Telescopio Refractor 70mm',
    price: 15000,
    quantity: 5,
    category: 'telescopios',
    description: 'Telescopio refractor de 70mm, ideal para principiantes.',
    image: '/Assets/Telescopios/Telescopio refractor de 70mm/1.webp',
  },
  {
    id: 2,
    title: 'Telescopio Reflector 130mm',
    price: 25000,
    quantity: 3,
    category: 'telescopios',
    description: 'Telescopio reflector de 130mm, excelente para observar planetas.',
    image: '/Assets/Telescopios/Telescopio Reflector 130mm/1.webp',
  },
  {
    id: 3,
    title: 'Telescopio Dobsoniano 8"',
    price: 50000,
    quantity: 2,
    category: 'telescopios',
    description: 'Telescopio Dobsoniano de 8", perfecto para observación astronómica.',
    image: '/Assets/Telescopios/Telescopio Dobsoniano 8/1.webp',
  },
  {
    id: 4,
    title: 'Telescopio Mak de 60mm',
    price: 22000,
    quantity: 4,
    category: 'telescopios',
    description: 'Telescopio Maksutov-Cassegrain de 60mm, compacto y portátil.',
    image: '/Assets/Telescopios/Telescopio Maksutov-Cassegrain de 60mm/1.webp',
  },
  {
    id: 5,
    title: 'Telescopio Refractor Profesional 100mm',
    price: 35000,
    quantity: 3,
    category: 'telescopios',
    description: 'Refractor profesional de 100mm, ideal para astrofotografía.',
    image: '/Assets/Telescopios/Telescopio Refractor profesional de 100mm/1.webp',
  },
  {
    id: 6,
    title: 'Telescopio Reflector de Alta Potencia',
    price: 60000,
    quantity: 1,
    category: 'telescopios',
    description: 'Reflector de alta potencia, ideal para observaciones profundas.',
    image: '/Assets/Telescopios/Telescopio Reflector de Alta Potencia/1.webp',
  },
  {
    id: 7,
    title: 'Telescopio Refractor de Viaje',
    price: 18000,
    quantity: 6,
    category: 'telescopios',
    description: 'Telescopio refractor ligero, perfecto para llevar a cualquier lugar.',
    image: '/Assets/Telescopios/Telescopio refractor ligero/1.webp',
  },
  {
    id: 8,
    title: 'Telescopio Skywatcher Explorer de 150mm',
    price: 40000,
    quantity: 2,
    category: 'telescopios',
    description: 'Skywatcher de alta calidad de 150mm, ideal para observación lunar y planetaria.',
    image: '/Assets/Telescopios/Telescopio Skywatcher de 150mm/1.webp',
  },
  {
    id: 9,
    title: 'Telescopio Solar',
    price: 30000,
    quantity: 3,
    category: 'telescopios',
    description: 'Telescopio diseñado específicamente para observar el sol.',
    image: '/Assets/Telescopios/Telescopio Solar/1.webp',
  },
  {
    id: 10,
    title: 'Kit Completo de Telescopios para Principiantes',
    price: 5000,
    quantity: 5,
    category: 'telescopios',
    description: 'Kit completo que incluye telescopio, trípode y accesorios.',
    image: '/Assets/Telescopios/Telescopio Kit/1.webp',
  },
];

export const getProducts = () => {
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve(products);
       }, 2000);
   });
};

export const getProduct = (id) => {
   const product = products.find((prod) => prod.id === id); 
   if (!product) {
       throw new Error(`Producto con ID ${id} no encontrado`); // Manejo de error
   }
   return product;
};

export const getCategory = (category) => {
   return products.filter((product) => product.category === category);
};