<script lang="ts" setup>
const authUser = useUser();
</script>

<template>
  <div v-if="!authUser" class="max-w-6xl m-auto container bg-orange-50 shadow-2xl mt-10 sm:mt-16">
    <div class="px-2 sm:px-5 py-3 sm:py-6 h-screen max-h-screen sm:h-auto relative">
      <div class="relative rounded-xl overflow-hidden">
        <h1 class="text-3xl sm:text-4xl mb-5">Recipe Hub</h1>
        <p class="mt-3 mb-8 italic">Sharing your favorite food and cocktails with friends!</p>
        <div class="relative w-full flex gap-6 snap-mandatory snap-x overflow-x-auto pb-14 -mb-5 overflow-y-hidden">
          <div class="">
            <div class="shrink-0 h-[20rem] w-[40rem]"></div>
          </div>
          <div class="snap-center shrink-0">
            <img class="shrink-0 h-[20rem] w-[32rem] px-[1rem]"
              src="@/assets/image/undraw_a_moment_to_relax_re_v5gv.svg">
          </div>
          <div class="snap-center shrink-0">
            <img class="shrink-0 h-[20rem] w-[32rem] px-[1rem]" src="@/assets/image/undraw_cooking_re_g99p.svg">
          </div>
          <div class="snap-center shrink-0">
            <img class="shrink-0 h-[20rem] w-[32rem] px-[1rem]" src="@/assets/image/undraw_happy_news_re_tsbd.svg">
          </div>
          <div class="snap-center shrink-0">
            <img class="shrink-0 h-[20rem] w-[32rem] px-[1rem]" src="@/assets/image/undraw_buddies_i0fa.svg">
          </div>
          <div class="snap-center shrink-0">
            <img class="shrink-0 h-[20rem] w-[32rem] px-[1rem]" src="@/assets/image/undraw_having_fun_re_vj4h.svg">
          </div>
          <div class="snap-center shrink-0">
            <img class="shrink-0 h-[20rem] w-[32rem] px-[1rem]" src="@/assets/image/undraw_personal_file_re_5joy.svg">
          </div>
          <div class="">
            <div class="shrink-0 h-[20rem] w-[40rem]"></div>
          </div>
        </div>
      </div>

      <h1 class="text-2xl sm:text-3xl py-2">😄 Welcome back,</h1>
      <IndexHeroWelcome />
      <span class="justify-center absolute hidden sm:flex sm:top-auto sm:bottom-0 sm:left-0 sm:right-0 p-2 sm:p-10">
        <Button class="p-3 sm:p-5 sm:rounded-full m-auto font-semibold sm:text-lg"
          label="Login / Signup" @click="navigateTo('/credentials')" />
        <!-- <NuxtLink class="p-3 sm:p-5 sm:rounded-full m-auto font-semibold sm:text-lg" to="/credentials">Login / Signup</NuxtLink> -->
      </span>
    </div>
  </div>
</template>