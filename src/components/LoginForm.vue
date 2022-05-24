<template>
    <form @submit.prevent="onFormSubmit">
    <fieldset>
        <div class="field">
            <label class="field__label">Nom d'utilisateur</label>
            <input
                v-model="username"
                class="field__input"
                type="text"
                placeholder="John"
            />
        </div>
        <div class="field">
            <label class="field__label">Mot de passe</label>
            <input
                v-model="password"
                class="field__input"
                type="password"
                placeholder="Mot de passe"
            />
        </div>
    </fieldset>

    <div v-if="errorMessages" class="alert error">
        {{ errorMessages }}
    </div>

    <button class="button" role="submit">Connexion</button>
</form>

</template>

<script>
import userService from '../services/userService';



export default {
    data() {
        return {
            errorMessages: "",
            username: "",
            password: ""
        }
    },
    methods: {
        onFormSubmit() {

            // on valide les saisies
            const errors = [];
            
            if (this.username.length <= 3) {
                errors.push("Le nom d'utilisateur n'est pas valide.");
            }

            if (this.password.length <= 3) {
                errors.push("Le mot de passe n'est pas valide.");
            }

            this.errorMessages = errors.join(', ');

            // si pas de message d'erreur
            if (!this.errorMessages) {
                // on s'authentifie avec l'API
                userService.connectUser({
                    username: this.username,
                    password: this.password
                })
                .then((response) => {
                    // si on s'est bien connecté, on navigue vers la home
                    this.$router.push('/');
                })
                .catch((error) => {
                    // sinon on affiche l'erreur
                    console.log(error);    
                });
            }
        }
    }
    
}
</script>