import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://picsum.photos/id/10/1080",
      route: "shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://picsum.photos/id/20/1080",
      route: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://picsum.photos/id/30/1080",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://picsum.photos/id/40/1080",
      route: "shop/womens",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://picsum.photos/id/50/1080",
      route: "shop/mens",
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
