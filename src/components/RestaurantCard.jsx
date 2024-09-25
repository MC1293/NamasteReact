import { CDNData } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
  const { resData } = props;
  const results = resData || [];
  return results.map((data) => {
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, id } =
      data?.info;
    const { slaString } = data?.info?.sla;
    const src = `${CDNData}${cloudinaryImageId}`;
    // const target = "/menu/" + { id };
    return (
      <Link to={"/menu/" + id} key={id}>
        <div className="rest-card">
          <img className="rest-img" alt="Restarant image" src={src}></img>
          <h3>{name}</h3>
          <h4>{cuisines}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{slaString}</h4>
        </div>
      </Link>
    );
  });
};

export default RestaurantCard;
