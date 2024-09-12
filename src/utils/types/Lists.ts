export interface RecipeInterface{
    recipe: {
        uri: string,
        label: string,
        image: string,
    }
}
export interface RecipeListInterface{
    items: RecipeInterface[],
}

export interface ProductInterface{
    image: string,
}
export interface ProductListInterface{
    items: ProductInterface[],
}

export interface IngredientInterface{
    text: string,
    image: string,
}
export interface IngredientListInterface{
    items: IngredientInterface[],
}

export interface MealTypeInterface{
    text: string,
}
export interface MealTypeListInterface{
    items: MealTypeInterface[],
}