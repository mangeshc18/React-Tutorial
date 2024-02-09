import { CDN_IMG_URL } from "../Utility/URL.JS";

const RestaurantCard = (Res) => {
    
    const {name, avgRating, cuisines, costForTwo,cloudinaryImageId} = Res.info;
    
        return(<div className="res-card">
            <img className="res-logo" src={CDN_IMG_URL + cloudinaryImageId }></img>
            
            <h3 className="card-title">{name}</h3>
        <h3 className="card-des">{cuisines.join(", ")}</h3>
            <h4>{avgRating}</h4>
            <h5>{costForTwo}</h5>
        </div>)
    }

    export default RestaurantCard;