<script lang="ts" setup>
import { User } from '@/types'

const user = useState<User>('user', () => ({
  profile: {
    image: 'https://avatars.githubusercontent.com/u/17363908?v=4',
    fullName: 'Lineng CAO',
    displayName: 'Vince',
    gender: "male",
    location: "San Francisco, CA",
    createAt: new Date()
  },
  foodRecipes: [{
    title: "Food Salmon Teriyaki Fish",
    id: 'food-salmon-teriyaki-fish',
    description: "xxxxxxx",
    imagesSrc: ['https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg'],
    markdownSrc: ""
  }],
  cocktailRecipes: [{
    title: "Alcohol Beverage Cocktail Cold",
    id: 'alcohol-beverage-cocktail-cold',
    description: "xxxxxxx",
    imagesSrc: ['https://cdn.pixabay.com/photo/2016/11/23/14/49/alcohol-1853327_1280.jpg'],
    markdownSrc: ""
  }]
}))

</script>

<template>
  <div class="w-full">
    <Menu :user="user" />
  </div>
</template>
