import { useEffect, useState } from "react";
import { YourComponent } from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utility/Constants";


const RestaurantMenu = () => {
    const {resId} = useParams();
    console.log(resId);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId
    );

    const json = await data.json();
    setResInfo(json.data);
    console.log(json);
  };

  if(resInfo === null) return <YourComponent />;


const { name,cuisines,costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;



  const itemCards = resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;

  console.log(itemCards);


  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}- {item.card.info.price}</li>)}

      </ul>
    </div>
  );
};

export default RestaurantMenu;
