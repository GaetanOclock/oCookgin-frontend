<template>
<!-- On utilise le modifer 'prevent' pour l'écouteur sur "submit" => on empêche le comportement par défaut du navigateur -->
<form @submit.prevent="onFormSubmit">
    <fieldset>
        <div class="field">
            <label class="field__label">Prénom</label>
            <input
                v-model="firstName"
                class="field__input"
                type="text"
                placeholder="John"
            />
        </div>
        <div class="field">
            <label class="field__label">Nom</label>
            <input
                v-model="lastName"
                class="field__input"
                type="text"
                placeholder="Doe"
            />
        </div>
        <div class="field">
            <label class="field__label">Adresse e-mail</label>
            <input
                v-model="email"
                class="field__input"
                type="text"
                placeholder="johndoe@ocooking.local"
            />
        </div>
        <div class="field">
            <label class="field__label">Identifiant</label>
            <input
                v-model.trim="username"
                class="field__input"
                type="text"
                placeholder="johndoe"
            />
        </div>
        <div class="field">
            <label class="field__label">Mot de passe</label>
            <input
                v-model.trim="password"
                class="field__input"
                type="password"
                placeholder="Mot de passe"
            />
        </div>
        <div class="field">
            <label class="field__label">Confirmation du mot de passe</label>
            <input
                v-model.trim="passwordConfirm"
                class="field__input"
                type="password"
                placeholder="Confirmez le mot de passe"
            />
        </div>
    </fieldset>
    <!-- On affiche chaque message contenu dans formErrors : -->
    <div v-if="errorMessages" class="alert error">
        {{ errorMessages }}
    </div>

    <button class="button" role="submit">Créer le compte</button>
</form>
</template>

<script>
import userService from '../services/userService';

export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            passwordConfirm: "",
            errorMessages: ""
        }
    },
    methods: {
        
        // on déclenche cette méthode à la soumission du formulaire
        // à chaque soumission, on va évaluer les erreurs présentes dans le form
        onFormSubmit() {
            // analyser les valeurs saisies dans tous les champs
            // => on stocke un message d'erreur par champ en erreur
            // => stocker les erreurs dans un array
            const errors = [];

            // analyse des valeurs saisies
            // champ prénom :
            if (this.firstName.length < 2) {
                // on ajoute un message d'erreur dans l'array errors
                errors.push("Le prénom doit contenir au moins deux caractères.");
            }
            // champ nom :
            if (this.lastName.length < 2) {
                // on ajoute un message d'erreur dans l'array errors
                errors.push("Le nom doit contenir au moins deux caractères.");
            }
            // champ email :
            if (this.email.search('@') === -1 || this.email.search('.')) {
                // on ajoute un message d'erreur dans l'array errors
                errors.push("Le format de l'adresse email est incorrect.");
            }
            if(this.username.length < 3) {
                errors.push("Le nom d'utilisateur est trop court (au moins 3 caractères)");
            }
            if(this.password !== this.passwordConfirm) {
                errors.push("Les mots de passe ne correspondent pas.");
            }

            this.errorMessages = errors.join(', ');

            // si pas d'erreur => on envoie les données à l'API
            if (!this.errorMessages) {
                userService.registerUser({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    username: this.username,
                    password: this.password
                })
                .then((response) => {
                    // lorsque l'API répond favorablement, on navigue automatiquement vers la page de connexion
                    // on peut utiliser this.$router qui correspond au routeur instancié dans router.js et fourni à vue dans index.js
                    // on utilise .push() pour ajouter un chemin à l'historique du router == on change l'url courante
                    this.$router.push('/login');
                })
                .catch((error) => {
                    // sinon (erreur côté WP à la création), on affiche les erreurs dans le template
                    this.errorMessages = error.response.data.message;
                });
            }
        }
    }
}
</script>