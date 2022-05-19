<template>
    <footer class="footer">
        <nav class="nav">
            <a href="javascript:void(0)">Liste des recettes</a>
            <a href="javascript:void(0)" v-if="isUserConnected">Créer une recette</a>
            <a href="javascript:void(0)" v-if="!isUserConnected">Inscription</a>
            <a href="javascript:void(0)" v-if="!isUserConnected">Connexion</a>
        </nav>
    </footer>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ["isUserConnected"]
}
</script>

<style lang="scss" scoped>
// scoped permet de limiter les effets du style à ce composant uniquement
// => on le "bride" en le contextualisant à ce composant
// => on s'assure donc que notre style de cassera pas l'affichage d'autres éléments par effet de bord

@import '../assets/scss/variables';
@import '../assets/scss/colors';

@import '../assets/scss/components/footer.scss';

</style>