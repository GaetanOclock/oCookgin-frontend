import axios from 'axios';

const endpoint = "http://localhost/Boson/prepa/wp-oCooking-backend-full/wp-json/wp/v2/ingredient"

export default {
    getIngredients() {
        return axios.get(endpoint);
    }
}
