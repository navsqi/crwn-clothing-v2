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
