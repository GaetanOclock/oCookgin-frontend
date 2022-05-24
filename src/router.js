// on gère la partie routing

// on importe les fonctions de vue router depuis la dépendance vue-router
import { createRouter, createWebHistory } from 'vue-router';

// on récupère les composants à utiliser avec notre router
import HomeView from "./views/HomeView.vue";
import LoginView from "./views/LoginView.vue";
import RecipeSingleView from "./views/RecipeSingleView.vue";
import RegisterView from "./views/RegisterView.vue";

// on définit des routes. C'est un array qui contient des objets sours la forme {path, component} (on ne choisit pes les noms de propriétés)
// chaque objet est une correspondance entre un chemin et un composant
const routes = [
    { path: '/', component: HomeView, name: "homepage"},
    { path: '/register', component: RegisterView, name: "register"},
    { path: '/login', component: LoginView, name: "login"},
    { path: '/recipe/:recipeId', component: RecipeSingleView, name: "recipe"},
]

// on instancie VueRouter avec la fonction createRouter
const router = createRouter({
    // on utilise le mode d'historique "HTML5" => urls classiques ex. /register
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

// on exporte l'instance de VueRouter créée
export default router;