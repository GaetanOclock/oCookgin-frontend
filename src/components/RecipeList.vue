<template>
    <div class="recipe-list">
            <h1>Recettes</h1>

            <div class="recipe-list__filters">
                <select v-model="selectedIngredients" @change="loadPage(currentPage)" name="ingredient-filter" id="ingredient-filter" multiple>
                    <option v-for="ingredient in ingredientList" :key="ingredient.id" :value="ingredient.id">{{ ingredient.name }}</option>
                </select>
            </div>

            <div class="recipe-list__pagination">
                <a :class="{active: currentPage === page}" @click.prevent="loadPage(page)" :key="page" v-for="page in pageNumber" href="javascript:void(0)">{{ page }}</a>
            </div>

            <RecipeExcerpt v-for="recipe in recipeList" :key="recipe.id" :recipeData="recipe"></RecipeExcerpt>
        </div>
</template>

<script>
import ingredientService from '../services/ingredientService';
import recipeService from '../services/recipeService';
import RecipeExcerpt from './RecipeExcerpt.vue';

export default {
    data() {
        return {
            recipeList: [],
            pageNumber: 0,
            currentPage: 1,
            selectedIngredients: []
        };
    },
    components: {
        RecipeExcerpt
    },
    created() {
        this.loadPage(this.currentPage);
        this.loadIngredients();
    },
    methods: {
        loadPage: function(pageToLoad) {
            recipeService.getRecipes(pageToLoad, this.selectedIngredients).then(response => {
                this.recipeList = response.data;
                this.pageNumber = parseInt(response.headers["x-wp-totalpages"]);
                this.currentPage = pageToLoad;
            });
        },
        loadIngredients: function() {
            ingredientService.getIngredients().then(response => {
                this.ingredientList = response.data;
            });
        }
    }

}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/colors.scss';

    .recipe-list {
        &__pagination {
            display: flex;
            justify-content: space-between;
            margin-bottom: $gutter;
            
            & a {
                background-color: $primaryBackgroundColor;
                border-radius: $cardBorderRadius;
                padding: $gutter;

                &, &:focus {
                    user-select:none;
                }

                &.active {
                    background-color: $primaryStrongColor;
                }
            }
        }
    }
</style>
