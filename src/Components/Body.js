import RestaurantList from "../Utility/RestaurantList";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { YourComponent } from "./ShimmerUi";

const Body = () => {
  const [FilterRestList, setFilterRestList] = useState([]);
  const [originalRestList, setOriginalRestList] = useState([]);
  console.log("body rendered");

  const [inputSearch, setInputSearch] = useState();

  

  //lets call swiggy api using useEffect hook and render it on ui
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await Response.json();
    const RestaurnatLink =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
        // console.log(RestaurnatLink);
    setFilterRestList(RestaurnatLink);
    setOriginalRestList(RestaurantList);
  };
  

  return (
    <div className="main-container">
      <div className="label-container">
        <button className="btn">
          Top Rated
        </button>
        <button className="btn">
          Remove Filter
        </button>
        <div className="input-container">
      <input className="input" placeholder="search.." value={inputSearch} onChange={(e) => {
        const inputValue = e.target.value;
        setInputSearch(inputValue);
        console.log(inputValue);
        
      }}/>
      <button className="search-btn" onClick={() => {
       const filterInput = originalRestList.filter((res) => {
          return res?.info?.name?.toLowerCase().includes(inputSearch.toLowerCase());
          

          // setFilterRestList(filterInput)
          console.log(filterInput);

        });
        setFilterRestList(filterInput);
        

        // console.log(filterInput);


      }}>Search</button>
        </div>

      </div>

      <div className="card-container">
        {FilterRestList.map((Res) => {
          return <RestaurantCard key={Res.info.id} {...Res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
