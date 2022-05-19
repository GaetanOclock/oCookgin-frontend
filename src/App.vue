<template>
<div>
    <!-- Header et Footer sont des composants de layout => ils ne changent pas lorsqu'on change de page -->
    <Header :isUserConnected="isUserLoggedIn"></Header>
    <!-- C'est la partie variable de la page => c'est qui changera quand on changera de page -->
    <Home></Home>
    <Footer :isUserConnected="isUserLoggedIn"></Footer>
</div>
</template>

<script>
    // on importe le composant Footer.vue dans une variable Footer
    import Footer from './components/Footer.vue';
    import Header from './components/Header.vue';
    import Home from './components/Home.vue';
    import NotFound from './components/NotFound.vue';

    export default {
        data() {
            return {
                isUserLoggedIn: false
            };
        },
        // on déclare les composants externes qui seront utilisés dans le composant courant
        components: {
            Footer,
            Header,
            Home,
            NotFound
        }
    };
</script>

<style lang="scss">
  // on importe les styles dans le style du composant
  @import "./assets/scss/main.scss";
</style>
