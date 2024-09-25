import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { MENUAPI } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestoMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${MENUAPI}${id}`);
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const results = await response.json();
      if (results && results?.data) {
        setResInfo(results?.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  if (resInfo === null) return <ShimmerUI />;
  const info = resInfo?.cards?.[2]?.card?.card?.info;
  const menuItems =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  console.log(menuItems);

  return (
    <div className="Menu">
      <h1>{info.name}</h1>
      <h2>
        {info.city} - {info.avgRatingString} Rating - {info.costForTwoMessage}
      </h2>
      <p>{info.cuisines.join(",")}</p>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu?.card?.info?.id}>
            {menu?.card?.info?.name} - Rs.{menu?.card?.info?.price / 100} only
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestoMenu;
