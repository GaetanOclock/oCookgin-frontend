<template>
  <article class="article">
    <a href="javascript:void(0)">
      <div class="media-image" :style="{ backgroundImage: 'url(' + recipeData?._embedded['wp:featuredmedia']?.['0']?.source_url + ')' }" ></div>
      <div class="text-content">
        <h2>{{ recipeData.title.rendered }}</h2>
        <div>
          {{ recipeData.excerpt }}
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
