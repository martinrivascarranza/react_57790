const products = [
  {
    id: "Anaheim",
    name: "Angels Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/angelscap.jpg",
    stock: 25,
    description: "Los Angeles Angels cap"
  },

  {
    id: "Houston",
    name: "Astros Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/astroscap.jpg",
    stock: 25,
    description: "Houston Astrod cap"
  },

  {
    id: "Oakland",
    name: "Athletics Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/astroscap.jpg",
    stock: 25,
    description: "Houston Astrod cap"
  },

  {
    id: "Toronto",
    name: "Blue Jays Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/bluejayscap.jpg",
    stock: 25,
    description: "Blue Jays cap"
  },

  {
    id: "Cleveland",
    name: "Guardians Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/guardianscap.jpg",
    stock: 25,
    description: "Guardians cap"
  },

  {
    id: "Seattle",
    name: "Mariners Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/marinerscap.jpg",
    stock: 25,
    description: "Mariners cap"
  },

  {
    id: "Orioles",
    name: "Orioles Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/oriolescap.jpg",
    stock: 25,
    description: "Orioles cap"
  },

  {
    id: "Texas",
    name: "Rangers Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/rangerscap.jpg",
    stock: 25,
    description: "Rangers cap"
  },
  
  {
    id: "Tampa",
    name: "Rays Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/rayscap.jpg",
    stock: 25,
    description: "Rays cap"
  },

  {
    id: "Boston",
    name: "Red Sox Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/redsoxcap.jpg",
    stock: 25,
    description: "Red Sox cap"
  },

  {
    id: "Kansas City",
    name: "Royals Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/royalscap.jpg",
    stock: 25,
    description: "Royals cap"
  },

  {
    id: "Detroit",
    name: "Tigers Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/tigerscap.jpg",
    stock: 25,
    description: "Tigers cap"
  },

  {
    id: "Minnesota",
    name: "Twins Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/twinscap.jpg",
    stock: 25,
    description: "Twins cap"
  },

  {
    id: "Chicago Ws",
    name: "White Sox Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/whitesoxcap.jpg",
    stock: 25,
    description: "White Sox cap"
  },

  {
    id: "New York Yankees",
    name: "Yankees Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/yankeescap.jpg",
    stock: 25,
    description: "Yankees cap"
  },

  {
    id: "Arizona",
    name: "Dbacks Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/arizona.jpg",
    stock: 25,
    description: "Dbacks cap"
  },

  {
    id: "Atlanta",
    name: "Braves Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/atlantacap.jpg",
    stock: 25,
    description: "Braves cap"
  },

  {
    id: "Milwaukee",
    name: "Brewers hat",
    price: 25,
    category: "hat",
    img: "./americancaps/brewerscap.jpg",
    stock: 25,
    description: "Brewers cap"
  },

  {
    id: "Saint Louis",
    name: "Cardinals Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/cardinalscap.jpg",
    stock: 25,
    description: "Cardinals cap"
  },

  {
    id: "Chicago Cubs",
    name: "Cubs Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/cubscap.jpg",
    stock: 25,
    description: "Cubs cap"
  },

  {
    id: "Los Angeles",
    name: "Dodgers Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/dodgers.jpg",
    stock: 25,
    description: "Dodgers cap"
  },

  {
    id: "San Francisco",
    name: "Giants Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/giantscap.jpg",
    stock: 25,
    description: "Giants cap"
  },

  {
    id: "Miami",
    name: "Marlins Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/marlinscap.jpg",
    stock: 25,
    description: "Marlins cap"
  },

  {
    id: "New York Mets",
    name: "Mets Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/metscap.jpg",
    stock: 25,
    description: "Mets cap"
  },
  {
    id: "Washington",
    name: "Nationals Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/nationalscap.jpg",
    stock: 25,
    description: "Nationals cap"
  },

  {
    id: "San Diego",
    name: "Padres Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/padrescap.jpg",
    stock: 25,
    description: "Padres cap"
  },

  {
    id: "Philadelphia",
    name: "Phillies Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/philliescap.jpg",
    stock: 25,
    description: "phillies cap"
  },

  {
    id: "Pittsburg",
    name: "Pirates Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/piratescap.jpg",
    stock: 25,
    description: "Pirates cap"
  },

  {
    id: "Cincinnati",
    name: "Reds Hat",
    price: 25,
    category: "hat",
    img: "./americancaps/redscap.jpg",
    stock: 25,
    description: "Reds cap"
  }
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
