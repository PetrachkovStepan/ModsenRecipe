import axios from "axios";

const URL = process.env.URL
const APP_ID = process.env.APP_ID
const APP_KEY = process.env.APP_KEY

export const getAllDishes = async (searchLine:string, dietCategory:string, dishCategory: string) => {   
    console.log(dietCategory + " " + dishCategory + " " + searchLine);
    let diet = ""
    let dish = ""
    let search = ""
    if(dietCategory){
        diet = "&diet=" + dietCategory
    }
    if(dishCategory){
        dish = "&dishType=" + dishCategory
    }
    if(searchLine){
        search = "&q=" + searchLine
    }
    const resp = await axios.get("https://api.edamam.com/api/recipes/v2?type=any"+ search +
        "&app_id="+APP_ID +
        "&app_key=%20"+APP_KEY+
        "%09"+ diet + dish + 
        "&imageSize=REGULAR")
    console.log(resp)
    return resp.data
}
export const getMoreDishes = async (href:string) => {
    const resp = await axios.get(href)
    console.log(resp);
    return resp.data
}
export const getOneDish = async (uri:string) => {
    let delIndex = uri.indexOf("recipe_")
    let reqId = uri.slice(delIndex)
    const resp = await axios.get(URL + reqId 
        + "?type=public"
         + "&app_id="
          + APP_ID + "&app_key="
           + APP_KEY 
            + "&field=uri&field=label&field=image&field=url&field=ingredients&field=calories&field=cuisineType&field=mealType&field=dishType")

    return resp.data.recipe
}
