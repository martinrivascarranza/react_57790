const products = [
  { id: '1', category: 'national-league', name: 'Product 1', description: 'Description 1' },
  { id: '2', category: 'national-league', name: 'Product 2', description: 'Description 2' },
  { id: '3', category: 'american-league', name: 'Product 3', description: 'Description 3' },
  { id: '4', category: 'american-league', name: 'Product 4', description: 'Description 4' },
];

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(product => product.category === category));
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(product => product.id === id));
    }, 1000);
  });
};
