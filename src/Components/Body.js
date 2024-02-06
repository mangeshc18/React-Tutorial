import RestaurantList from "../Utility/RestaurantList";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {

  let [RestList, setRestList] = useState(RestaurantList)
  console.log(RestList);
  let HandleFilterClick = () => {
    let TopRatedHotels = RestaurantList.filter((res) => res.info.avgRating > 4.5)
    setRestList(TopRatedHotels)
  }
    
    return(
    <div className="main-container">
    <div className="top-rated-btn">
      <button className="btn" onClick={HandleFilterClick}>Top Rated</button>
    </div>
    <div className="card-container">

    {
      
      RestList.map((Res) => {
        
        return <RestaurantCard key = { Res.info.id} {...Res}/>
      })

    }
    </div>
    </div>)

}

export default Body;