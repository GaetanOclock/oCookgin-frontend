import axios from 'axios';

import { baseUrl } from './apiClientService';

const endpoint = "/wp/v2/recipes"

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
        return axios.get(baseUrl + endpoint + '?_embed&page=' + page + ingredientFilterString + recipeTypeFilterString);
    },

    // récupérer les données d'une recette par son id
    getSingleRecipe(recipeId) {
        return axios.get(baseUrl + endpoint + '/' + recipeId);
    }

}
