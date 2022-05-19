<template>
    <!-- on n'affecte la classe .logo-only au header seulement lorsque l'utilisateur n'est pas connecté -->
    <!-- On peut utilser v-bind avec un objet donc chaque clé est le nom de la classe et la valeur associée est un booléen (true => on utilise la classe, false => on la retire) -->
    <header class="header" v-bind:class="{ 'logo-only': !isUserConnected }">
        <div class="logo-container">
            <!-- le "~" sera remplacé par parcel => représente le répertoire courant (celui dans lequel la commande parcel a été lancée) -->
            <img class="logo" src="../assets/images/oven.svg">
            <div class="text-container">
                <span class="first-part">10 minutes</span>
                <span class="second-part">O'Four</span>
            </div>
        </div>
        <!-- On n'affiche cette div que lorsque l'utilisateur est connecté -->
        <div class="user" v-if="isUserConnected">
            <span class="username">John Doe</span>
            <img class="avatar" src="../assets/images/avatar.png" />
            <div class="user-actions">
            <!-- <a href="javascript:void(0)">Inviter un ami</a> -->
            <a href="javascript:void(0)">Déconnexion</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    // à la clé data de cet objet, on peut déclarer des "variables" à utiliser dans le composant
    data() {
        return {
            
        };
    },
    // on déclare les props utilisables sur ce composant => on définit quels attributs on pourra utiliser pour passer de la donnée ici depuis le parent
    props: ["isUserConnected"]
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/colors';

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    background-color: $primaryBackgroundColor;
    box-shadow: 0px 0px 10px rgba(20, 20, 20, 0.2);
    top: 0;
    padding-bottom: 1rem;
    line-height: 1;

    &.logo-only {
        justify-content: center;
    }

    .logo-container {
        display: flex;
        padding: 1rem;
        padding-bottom: 0;

        .logo {
            height: 2.4rem;
            vertical-align: middle;
        }

        .text-container {
            display: flex;
            flex-direction: column;

            .first-part {
                font-family: "Montserrat Bold", Arial;
            }

            .second-part {
                font-family: "Montserrat", Arial;
                font-size: 1.7rem;
            }
        }
    }

    .user {
        padding: 1rem;
        padding-bottom: 0;
        font-family: "Montserrat Bold", Arial;

        .user-badge {
            position: absolute;
            top: 1rem;
            right: 0.8rem;
        }

        .user-badge svg {
            fill: #306715;
        }

        .user-actions {
            position: fixed;
            right: 0rem;
            top: 3.5rem;
            background-color: $primaryStrongColor;
            padding: 1rem;
            box-shadow: 0px 0px 10px rgba(20, 20, 20, 0.2);

            a {
                display: block;
                line-height: 2;
                margin-bottom: 1rem;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    .nav {
        align-items: center;
        display: flex;
        justify-content: space-around;
        padding: 1rem;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .user {
        text-align: center;

        .username {
            padding-right: 0.5rem;
        }

        .avatar {
            vertical-align: middle;
            display: inline-block;
            height: 2rem;
            width: 2rem;
            border-radius: 50px;
        }
    }
}
</style>
