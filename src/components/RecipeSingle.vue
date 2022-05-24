<template>
    <div>
        <h1>{{ recipeData.title.rendered }}</h1>
        <article class="recipe">
            <section class="informations">
                <ul>
                    <li>Temps de préparation : 25m</li>
                    <li>Coût par personne : 3€</li>
                </ul>
                <div class="media-image" style="background-image:url(https://source.unsplash.com/collection/157&random=100)"></div>
            </section>

            <section class="ingredients">
                <h2>Ingrédients</h2>
                <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Mollitia, provident numquam.</li>
                    <li>Excepturi, quae earum?</li>
                </ul>
            </section>
            <section class="preparation">
                <h2>Préparation</h2>
                <p>Sed nihil, voluptatibus consectetur in nemo sunt dolore harum ab vitae aliquam reprehenderit libero eos, doloremque adipisci voluptates atque soluta porro officiis numquam tempore pariatur officia expedita iure asperiores! Quia suscipit minima in officia, at quidem! Repellat, incidunt assumenda tempore dolorem eos corrupti omnis ratione?</p>
                <p>Nam nisi architecto, quaerat ab, ipsa alias impedit itaque earum explicabo, eius dolorum. Nesciunt eum assumenda rerum cupiditate veniam corrupti consequuntur, deserunt sequi consectetur animi alias labore minus non magni sit eligendi quos, soluta vitae repellendus commodi delectus explicabo obcaecati esse. Odit laudantium optio omnis!</p>
            </section>
        </article>
        <section>
            <header>
                <h2>Commentaires (1)</h2>
            </header>
            <main>
                <div class="comment">
                    <p class="author">Jean-Paul Belmondo</p>
                    <p>Coucou, je suis un commentaire. J’adore les pantouflets de légumes.</p>
                </div>
                <div class="comment-form">
                    <h3>Commenter</h3>
                    <form>
                        <div>
                            <div class="field">
                                <textarea placeholder="Le texte de votre commentaire" class="textarea field__input"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="button">Commenter</button>
                    </form>
                </div>
            </main>
        </section>
    </div>
</template>

<script>
import recipeService from '../services/recipeService';

export default {
    data() {
        return {
            // important, placer des valeurs par défaut pour que le template ne plante pas en attendant les données de l'API
            recipeData: {
                title: {
                    rendered: ""
                }
            }
        }
    },
    mounted() {
        // charger les information de la rectte dont l'id est dans l'URL
        // utiliser le service recipeService pour récupérer les données d'une recette
        // this.$route contient l'objet qui correspond à la route courante
        recipeService.getSingleRecipe(this.$route.params.recipeId)
        .then((response) => {
            console.log(response);
            // placer ces données dans la data recipeData
            this.recipeData = response.data;
        });

    }
};
</script>
