import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestoMenuFetch from "../utils/useRestoMenuFetch";

const RestoMenu = () => {
  const { id } = useParams();
  const resInfo = useRestoMenuFetch(id);
  if (resInfo === null || !resInfo) return <ShimmerUI />;

  const info = resInfo?.cards?.[2]?.card?.card?.info;
  console.log("info---", info);
  const menuItems =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

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
