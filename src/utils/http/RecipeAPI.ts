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

let b = `https://api.edamam.com/api/recipes/v2/by-uri?type=public
&uri=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_f1a89654f14747509601e0d436f628af
&app_id=79c47d40
&app_key=48d44de737053a2137e3405fac9bb22e
&field=uri
&field=label
&field=image
&field=url
&field=ingredients
&field=calories
&field=cuisineType
&field=mealType
&field=dishType`

export const getAllDishes = async () => {    
    const resp = await axios.get(a)
    console.log(resp)
    return resp.data.hits
}
export const getOneDish = async (uri:string) => {   
    uri = "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_f1a89654f14747509601e0d436f628af"
    const resp = await axios.get(URL + "by-uri?type=public&uri="
         + uri + "&app_id="
          + APP_ID + "&app_key="
           + APP_KEY 
            + "&field=uri&field=label&field=image&field=url&field=ingredients&field=calories&field=cuisineType&field=mealType&field=dishType",)
    return resp.data.hits[0].recipe
}
