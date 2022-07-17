<script setup>
import Typewriter from 'typewriter-effect/dist/core.js';

onMounted(() => {
  // loading Typewriter and waiting document to be rendered
  setTimeout(() => {
    new Typewriter('#typewriter', {
      autoStart: true,
      loop: true,
    }).typeString('Find your recipe in any 🛎️ occasion 🥳.')
      .pauseFor(1000)
      .deleteAll(20)
      .typeString('Discover and make the best 🥘 <span style="color: #ff7c7c;">food</span>.')
      .pauseFor(500)
      .deleteChars(8)
      .typeString('🍸 <span style="color: #27ae60;">cocktail</span>.')
      .pauseFor(1000)
      .deleteAll(20)
      .typeString('Start ✍️ adding your own <strong>recipes<strong>.')
      .pauseFor(1000)
      .deleteAll()
      .start();
  }, 500)

})

</script>
<template>
  <h1 class="text-2xl sm:text-3xl py-2 mb-[7rem]" id="typewriter" />
</template>