import axios from "axios";

const URL = "https://api.edamam.com/api/"
const APP_ID = "79c47d40"
const APP_KEY = "48d44de737053a2137e3405fac9bb22e"

export const getAllDishes = async () => {    
    const resp = await axios.get("https://api.edamam.com/api/recipes/v2?type=any&q=chiken&app_id=79c47d40&app_key=%2048d44de737053a2137e3405fac9bb22e%09&diet=balanced&dishType=Biscuits%20and%20cookies")
    console.log(resp)
}

`https://api.edamam.com/api/recipes/v2?type=any
&app_id=79c47d40
&app_key=%2048d44de737053a2137e3405fac9bb22e%09
&diet=balanced
&health=alcohol-free
&cuisineType=American
&mealType=Breakfast
&dishType=Biscuits%20and%20cookies
&imageSize=REGULAR`