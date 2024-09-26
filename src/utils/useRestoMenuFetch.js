import { useEffect, useState } from "react";
import { MENUAPI } from "./constants";

const useRestoMenuFetch = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      console.log("inside Custome Hook");
      const response = await fetch(MENUAPI + id);
      const results = await response.json();
      setResInfo(results?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return resInfo;
};

export default useRestoMenuFetch;
