import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [resFilteredData, setResFilteredData] = useState([]);

  const handleFilter = () => {
    const filteredData = resData.filter((res) => {
      return res?.info?.avgRating > 4;
    });
    setResFilteredData(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const results = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0045317&lng=80.13867139999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!results.ok) {
        throw new Error(`${results.status}`);
      }
      const data = await results.json();
      if (
        data &&
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ) {
        setResData(
          data.data.cards?.[1].card.card.gridElements.infoWithStyle.restaurants
        );
        setResFilteredData(
          data.data.cards?.[1].card.card.gridElements.infoWithStyle.restaurants
        );
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSearch = () => {
    const searchResValue = resData.filter((res) => {
      const restName = res?.info?.name;
      console.log("---->", restName);
      return restName.toLowerCase().includes(searchText.toLocaleLowerCase());
    });
    console.log(searchResValue);
    setResFilteredData(searchResValue);
  };

  const HandleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  return resData.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="bodycontainer">
      <div className="filterBtn">
        <div className="searchBox">
          <input
            type="text"
            className="searchBar"
            value={searchText}
            onChange={HandleOnChange}
          ></input>
          <button className="searchBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button onClick={handleFilter} className="topRestoFilter">
          Filter By Top Restaurants
        </button>
      </div>
      <div className="restContainer">
        <RestaurantCard resData={resFilteredData} />
      </div>
    </div>
  );
};

export default Body;
