import axios from 'axios';

const endpoint = "http://localhost/Boson/prepa/wp-oCooking-backend-full/wp-json/wp/v2/recipes"

export default {
    getRecipes(page, ingredientsFilterList) {
        let ingredientFilterString = "";
        if (ingredientsFilterList != null) {
            ingredientFilterString = "&ingredient[operator]=AND&ingredient[terms]=" + ingredientsFilterList.join(',');
        }
        return axios.get(endpoint + '?_embed&page=' + page + ingredientFilterString);
    }
}
