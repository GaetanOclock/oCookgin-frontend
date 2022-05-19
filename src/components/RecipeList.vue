<template>
    <div class="recipe-list">
            <h1>Recettes</h1>
            <RecipeExcerpt v-for="recipe in recipeList" :key="recipe.id" :recipeData="recipe"></RecipeExcerpt>
        </div>
</template>

<script>
import RecipeExcerpt from './RecipeExcerpt.vue';

export default {
    data() {
        return {
            recipeList: [
                {
                    id: 1,
                    title: "Recette 1",
                    image: "https://source.unsplash.com/collection/157&random=10",
                },
                {
                    id: 2,
                    title: "Recette 2",
                    image: "https://source.unsplash.com/collection/157&random=2",
                },
                {
                    id: 3,
                    title: "Recette 3",
                    image: "https://source.unsplash.com/collection/157&random=3",
                },
                {
                    id: 4,
                    title: "Recette 4",
                    image: "https://source.unsplash.com/collection/157&random=4",
                },
                {
                    id: 5,
                    title: "Recette 5",
                    image: "https://source.unsplash.com/collection/157&random=5",
                },
                {
                    id: 6,
                    title: "Recette 6",
                    image: "https://source.unsplash.com/collection/157&random=6",
                },
            ]
        };
    },
    components: {
        RecipeExcerpt
    }
}
</script>