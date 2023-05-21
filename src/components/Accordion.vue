<script setup>
import Tweet from './Tweet.vue';

const data = [
  {
    name: 'Ray A. Rotaquio',
    img: 'https://pbs.twimg.com/profile_images/1249637392673386504/odi6Ygv3_400x400.jpg',
    handle: '@yaroiuqator',
    tweet:
      '@zenszei @igignoramus Tanong lang sa inyo. Sa tingin nyo proud ang magulang, asawa at anak nya s pagiging bayaran para magrally? Anong klasing tao to? Tao b to?',
    likes: 1,
  },
  {
    name: 'ապրել',
    img: 'https://pbs.twimg.com/profile_images/1098381648368828416/be6l_VuT_400x400.jpg',
    handle: '@yyassssammaqq',
    tweet:
      'Dapat pinipinturahan mga mukha at sinasabuyan ng pakain sa baboy ang mga yan e. Mga perwisyo. Mga bayaran lang. Kung wala silang trabaho saan sila kumuha ng pamasahe at pondo para magrally? In short mga perwisyong bayaran lang! 🙄🙄🙄 https://t.co/BVjf5nbfyt',
    likes: 1,
  },
  {
    name: 'faithfulness88',
    img: 'https://pbs.twimg.com/profile_images/668873279839580160/soNP7snF_400x400.jpg',
    handle: '@faithfulness44',
    tweet:
      'sigi mga parents tapatan natin ang mga rally ng mga komunista na yan para ang mga anak natin na nag aaral dyan ma aware sila na ang mga nag recruit sa kanila gagawin silang NPA communista someday!',
    likes: 0,
  },
  {
    name: 'warrior_of_K',
    img: 'https://pbs.twimg.com/profile_images/795514740256763905/FZNDejTK_400x400.jpg',
    handle: '@warriorlien',
    date: '29/08/2019 16:24',
    tweet:
      'Bakit kakaunting media lang ang tumututok ngayong araw sa pagkilos na ginagawa ng mga magulang laban sa NPA at leftist groups? Totoo kaya na may komunista sa hanay ng media? Daang-daan na ang nagpunta sa rally. May ulat na ba ang mga malalaking network dito https://t.co/svrV0U1h7P',
    likes: 26,
    replies: 1,
    retweets: 15,
  },
];
</script>

<template>
  <div class="relative self-baseline">
    <Tweet
      class="mr-4"
      :key="index"
      :index="index"
      v-for="(tweet, index) in data"
      :isActive="index == 0"
      :name="tweet.name"
      :handle="tweet.handle"
      :replies="tweet.replies"
      :retweets="tweet.retweets"
      :likes="tweet.likes"
      :img="tweet.img"
      :date="tweet.date"
    >
      {{ tweet.tweet }}
    </Tweet>
  </div>
</template>
