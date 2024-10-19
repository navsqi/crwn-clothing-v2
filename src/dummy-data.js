const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const productsData = [
  {
    id: 1,
    name: "Brown Brim",
    imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1, 200)}/1080`,
    price: 25,
  },
  {
    id: 2,
    name: "Blue Beanie",
    imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1, 200)}/1080`,
    price: 18,
  },
  {
    id: 3,
    name: "Brown Cowboy",
    imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1, 200)}/1080`,
    price: 35,
  },
  {
    id: 4,
    name: "Grey Brim",
    imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1, 200)}/1080`,
    price: 25,
  },
  {
    id: 5,
    name: "Green Beanie",
    imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1, 200)}/1080`,
    price: 18,
  },
  {
    id: 6,
    name: "Palm Tree Cap",
    imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1, 200)}/1080`,
    price: 14,
  },
  {
    id: 7,
    name: "Red Beanie",
    imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1, 200)}/1080`,
    price: 18,
  },
  {
    id: 8,
    name: "Wolf Cap",
    imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1, 200)}/1080`,
    price: 14,
  },
  {
    id: 9,
    name: "Blue Snapback",
    imageUrl: `https://picsum.photos/id/${randomIntFromInterval(1, 200)}/1080`,
    price: 16,
  },
];

export const SHOP_DATA = [
  {
    title: "Hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 25,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 18,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 25,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 18,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 14,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 18,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 14,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 16,
      },
    ],
  },
  {
    title: "Sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 125,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 25,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 80,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: `https://picsum.photos/id/${randomIntFromInterval(
          1,
          200
        )}/1080`,
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
