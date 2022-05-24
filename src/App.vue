<template>
<div>
    <!-- Header et Footer sont des composants de layout => ils ne changent pas lorsqu'on change de page -->
    <Header :isUserConnected="isUserLoggedIn"></Header>
    <!-- C'est la partie variable de la page => c'est qui changera quand on changera de page -->
    <RouterView></RouterView>
    <Footer :isUserConnected="isUserLoggedIn"></Footer>
</div>
</template>

<script>
    // on importe le composant Footer.vue dans une variable Footer
    import Footer from './components/Footer.vue';
    import Header from './components/Header.vue';
    import userService from './services/userService';

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
        },
        methods: {
            checkUserStatus() {
                // on modifie la valeur de la data isUserLoggedIn avec la valeur de userService.isUserConnected()
                this.isUserLoggedIn = userService.isUserConnected();
            }
        },
        // lorsque le composant est ajouté au DOM, mounted() est automatiquement exécutée
        mounted() {
            this.checkUserStatus();
            document.addEventListener('userStatusChanged', () => {
                this.checkUserStatus();
            });
        }
    };
</script>

<style lang="scss">
  // on importe les styles dans le style du composant
  @import "./assets/scss/main.scss";
</style>
