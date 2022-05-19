<template>
    <div class="recipe-list">
            <h1>Recettes</h1>
            <RecipeExcerpt></RecipeExcerpt>
            <RecipeExcerpt></RecipeExcerpt>
            <RecipeExcerpt></RecipeExcerpt>
            <RecipeExcerpt></RecipeExcerpt>
            <RecipeExcerpt></RecipeExcerpt>
            <RecipeExcerpt></RecipeExcerpt>
        </div>
</template>

<script>
import RecipeExcerpt from './RecipeExcerpt.vue';

export default {
    components: {
        RecipeExcerpt
    }
}
</script>