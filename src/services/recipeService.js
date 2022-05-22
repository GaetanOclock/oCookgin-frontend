import axios from 'axios';

const endpoint = "http://localhost/Boson/prepa/wp-oCooking-backend-full/wp-json/wp/v2/recipes"

export default {
    getRecipes(page, ingredientsFilterList, recipeTypesFilterList) {
        let ingredientFilterString = "";
        if (ingredientsFilterList != null) {
            ingredientFilterString = "&ingredient[operator]=AND&ingredient[terms]=" + ingredientsFilterList.join(',');
        }
        let recipeTypeFilterString = "";
        if (recipeTypesFilterList != null) {
            recipeTypeFilterString = "&recipe_type[operator]=AND&recipe_type[terms]=" + recipeTypesFilterList.join(',');
        }
        return axios.get(endpoint + '?_embed&page=' + page + ingredientFilterString + recipeTypeFilterString);
    }
}
