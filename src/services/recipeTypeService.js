import axios from 'axios';

const endpoint = "http://localhost/Boson/prepa/wp-oCooking-backend-full/wp-json/wp/v2/recipe_type"

export default {
    getRecipeTypes() {
        return axios.get(endpoint);
    }
}
