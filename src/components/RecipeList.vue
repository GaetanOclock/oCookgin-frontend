<template>
    <div class="recipe-list">
            <h1>Recettes</h1>

            <div class="recipe-list__filters">
                <select v-model="selectedIngredients" @change="loadPage(currentPage)" name="ingredient-filter" id="ingredient-filter" multiple>
                    <option v-for="ingredient in ingredientList" :key="ingredient.id" :value="ingredient.id">{{ ingredient.name }}</option>
                </select>
                <select v-model="selectedRecipeTypes" @change="loadPage(currentPage)" name="recipe-type-filter" id="recipe-type-filter" multiple>
                    <option v-for="recipeType in recipeTypeList" :key="recipeType.id" :value="recipeType.id">{{ recipeType.name }}</option>
                </select>
            </div>

            <div class="recipe-list__pagination">
                <a :class="{active: currentPage === page}" @click.prevent="loadPage(page)" :key="page" v-for="page in pageNumber" href="javascript:void(0)">{{ page }}</a>
            </div>

            <RecipeExcerpt @click="onRecipeClick(recipe.id)" v-for="recipe in recipeList" :key="recipe.id" :recipeData="recipe"></RecipeExcerpt>
        </div>
</template>

<script>
import ingredientService from '../services/ingredientService';
import recipeTypeService from '../services/recipeTypeService';
import recipeService from '../services/recipeService';
import RecipeExcerpt from './RecipeExcerpt.vue';

export default {
    data() {
        return {
            recipeList: [],
            pageNumber: 0,
            currentPage: 1,
            selectedIngredients: [],
            selectedRecipeTypes: [],
            ingredientList: [],
            recipeTypeList: []
        };
    },
    components: {
        RecipeExcerpt
    },
    created() {
        this.loadPage(this.currentPage);
        this.loadIngredients();
        this.loadRecipeTypes();
    },
    methods: {
        loadPage: function(pageToLoad) {
            recipeService.getRecipes(pageToLoad, this.selectedIngredients, this.selectedRecipeTypes).then(response => {
                this.recipeList = response.data;
                this.pageNumber = parseInt(response.headers["x-wp-totalpages"]);
                this.currentPage = pageToLoad;
                console.log(response.data);
            });
        },
        loadIngredients: function() {
            ingredientService.getIngredients().then(response => {
                this.ingredientList = response.data;
            });
        },
        loadRecipeTypes: function() {
            recipeTypeService.getRecipeTypes().then(response => {
                this.recipeTypeList = response.data;
            });
        },
        // au clic sur une recette
        onRecipeClick(recipeId) {
            // on déclenche la navigation vers la route /recipe/{id}
            // en passant recipeId
            this.$router.push({ 
                name: 'recipe',
                params: {
                    recipeId: recipeId
                }
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
