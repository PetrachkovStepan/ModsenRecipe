import axios from "axios";

const URL = "https://api.edamam.com/api/recipes/v2/"
const APP_ID = "79c47d40"
const APP_KEY = "48d44de737053a2137e3405fac9bb22e"


//get all
let a = `https://api.edamam.com/api/recipes/v2?type=any
&app_id=79c47d40
&app_key=%2048d44de737053a2137e3405fac9bb22e%09
&diet=balanced
&dishType=Biscuits%20and%20cookies
&imageSize=REGULAR`

export const getAllDishes = async () => {    
    const resp = await axios.get(a)
    console.log(resp)
    return resp.data.hits
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
    console.log(resp);
            
    return resp.data.recipe
}
