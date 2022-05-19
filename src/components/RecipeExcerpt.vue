<template>
  <article class="article">
    <a href="javascript:void(0)">
      <div class="media-image" :style="{ backgroundImage: 'url(' + recipeData.image + ')' }" ></div>
      <div class="text-content">
        <h2>{{ recipeData.title }}</h2>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          vero iure deleniti minima in eaque pariatur consequuntur architecto ea
          consectetur?
        </div>
      </div>
    </a>
  </article>
</template>

<script>
export default {
    props: ["recipeData"]
}
</script>
