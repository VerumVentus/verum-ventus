<template>
  <div class="wrapper">
    <div class="flex gap-8 justify-center">
      <div class="article-wrapper">
        <Navbar class="relative block invisible" />
        <h1>What Now?</h1>
        <section id="findings">
          <h2>Summary</h2>
          <p>
            Critiquing the government and advocating for action is a fundamental
            democratic right.
          </p>
          <Image
            :src="`/activists.png`"
            :source="`Carlo Manalansan (Bulatlat)`"
          />
          <p>
            However, the persistent increase in red-tagging within the
            Philippines poses a direct assault on this right, instilling fear
            and suppressing voices.
          </p>
          <h3>
            <a
              href="https://www.newmandala.org/red-tagging-as-a-human-rights-violation-in-the-philippines/"
            >
              Through red-tagging, Philippine democracy itself is endangered.
            </a>
          </h3>
          <p>
            Karapatan's records further illustrate the gravity of the situation,
            indicating <b>442</b> cases of extrajudicial killings and
            <b>574</b> cases of frustrated extrajudicial killings from
            <span class="highlighted">June 2016 to June 2022</span>, with the
            casualties resulting from Duterte's "war on drugs" still excluded
            from these numbers. Additionally, there have been
            <b>2,957 cases</b> of illegal arrest without detention and
            <b>1,341 cases</b> of illegal arrest with detention.
          </p>
          <div class="grid grid-cols-2 gap-4 my-8">
            <Image :src="`/karapatan-1.png`" :source="`Karapatan FB Page`" />
            <Image :src="`/karapatan-2.png`" :source="`Karapatan FB Page`" />
          </div>
          <p>
            It is worth noting that
            <a
              href="https://www.newmandala.org/red-tagging-as-a-human-rights-violation-in-the-philippines/"
            >
              a significant number of these victims have been specifically
              targeted through red-tagging as individuals or as part of
              red-tagged organizations.</a
            >
            These figures highlight the urgency of addressing this issue to
            safeguard the rights and safety of all Filipino citizens.
          </p>
          <h3>
            Our findings showed that the Duterte Administration exacerbated the
            problem of red-tagging in the Philippines.
          </h3>
          <p>
            This was shown by the
            <b> increasing trend of the number of tweets from 2016 to 2022 </b>
            with peaks that correlate with
            <b>
              political events that trigger criticism of the administration </b
            >.
          </p>
          <Modeling />
          <p>
            Results of the exploratory data also showed that the majority of the
            tweets are correlated with
            <span class="highlighted">recently made</span> and
            <span class="highlighted">anonymous accounts</span> that utilize
            <span class="highlighted">text replies</span> to spread false
            information about activists.
          </p>
          <TweetType />
          <Posted />
          <p>
            These findings can be compared with the existing information on the
            current state of the country.
            <a
              href="https://www.channelnewsasia.com/cna-insider/paid-troll-army-hire-philippines-social-media-elections-influencers-2917556"
            >
              The investigation into the dissemination of fake news by paid
              "trolls" reveals their utilization of anonymous accounts, multiple
              SIM cards, and adherence to daily posting quotas.</a
            >
          </p>
          <Image
            class="my-8"
            :src="`/w-post.png`"
            :source="`John W. Tomac (The Washington Post)
      `"
          />
          <p>
            These hold significance in the ongoing investigation, which can
            <b> act as a starting point </b> for further exploration.
            <b>
              Through natural language processing and sentiment analysis of the
              collected data, there is potential to develop an AI tool capable
              of distinguishing troll accounts from genuine ones.
            </b>
          </p>
        </section>

        <section id="bottomline">
          <Box class="max-w-none bg-[#16191c] text-light">
            <h2 class="my-4 text-light">Bottomline</h2>
            <p>
              Our findings suggest the urgency of taking immediate action to
              counter red-tagging in order to protect our democratic rights.
              Addressing the root causes of red-tagging, holding the responsible
              parties accountable, and investing in technological tools and
              strategies to combat misinformation are crucial steps towards
              securing and ensuring the democracy for all Filipinos.
            </p>
          </Box>
        </section>

        <router-link to="/team" class="flex items-center gap-4 mt-8 group">
          <p>
            <span class="highlighted group-hover:text-primary"
              >Meet the team</span
            >
          </p>

          <v-icon
            name="hi-arrow-right"
            class="transform transition-all group-hover:translate-x-3"
          />
        </router-link>
      </div>
      <StickySpy />
    </div>
  </div>
</template>

<style scoped>
html {
  overflow-y: auto;
}
</style>

<script setup>
import Box from '@/components/Box.vue';
import Image from '@/components/Image.vue';
import Navbar from '@/components/Navbar.vue';
import Modeling from '@/components/plots/Modeling.vue';
import TweetType from '@/components/plots/TweetType.vue';
import Posted from '@/components/plots/Posted.vue';
import StickySpy from '@/components/StickySpy.vue';
</script>
