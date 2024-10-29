import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export default function RestaurantMenu(){

    const {resId} = useParams()

    const listMenu = useRestaurantMenu(resId)
    
    
    
    
    if( listMenu == null){
        return <Shimmer/> 
    }

    // console.log(listMenu);
    
    const {itemCards} = listMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    // console.log(itemCards);
    
    // const category = listMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards

    // console.log(category);
    // const category = listMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>{
    //     c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    // })

    // console.log(category);
    
    

    return(
        <div className="menu">
            <h1>{listMenu.cards[2].card.card.info.name}</h1>
            <h2>City : {listMenu.cards[2].card.card.info.city}</h2>
            <p>Cuisines : {listMenu.cards[2].card.card.info.cuisines.join(", ")} - {listMenu.cards[2].card.card.info.costForTwoMessage}</p>
            <h3>AvgRatings : {listMenu.cards[2].card.card.info.avgRating}</h3>
            {/* {category.map((category)=>{
                category.
            })} */}
            {itemCards.map((e)=>{
                <ul key={e.id}>
                    <li>{e.name}</li>
                </ul>
            })}
       </div>
    )
}