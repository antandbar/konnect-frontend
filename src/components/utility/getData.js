import { useEffect, useState } from "react";
import { getCategories, getLocations } from "../activities/service";

export const useCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      getCategories().then(categories => {
          const results =  categories.results;
          const categoryArr = results.map((category) => {
            return normalizeKey(category, 'categoryName');
          });
        setCategories(categoryArr);
    })
    },[])
    return categories;
  };
  
  export const useLocation = () => {
    const [locations, setlocations] = useState([]);
    useEffect(() => {
      getLocations().then(locations => {
          const results =  locations.results;
          const locationArr = results.map((locations) =>{ 
          return normalizeKey(locations, 'location');
          });
          setlocations(locationArr);
    })
    },[])
    return locations;
  };
  
  
  const normalizeKey = (obj, oldKey) => {
    obj['name'] = obj[oldKey];
    delete obj[oldKey];
    return obj;
  }