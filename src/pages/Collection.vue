<template>
  <div class="article-wrapper">
    <navbar class="relative block invisible" />
    <h1>Data Collection</h1>
    <h2>We mined the internet for fake news data.</h2>
    <p>
      After defining the goal of this project, we now move on to the next step:
      data collection. <span class="highlighted">Data collection</span> is the
      process of gathering relevant information that will help us answer the
      research questions.
    </p>
    <p>
      In our mission to tackle the issue of misinformation, we have developed a
      custom Twitter scraper tool that allows us to gather tweet and user data
      from the platform. Twitter, being a prominent social media platform,
      serves as a rich source of information and conversations surrounding our
      topic.
    </p>
    <div class="my-8">
      <Box
        class="text-center max-w-none bg-[#16191c]"
        header="Keywords"
        icon="hi-key"
      >
        <p>
          We used the following keywords to search for tweets that are relevant
          to our topic:
        </p>
        <p>
          <span v-for="keyword in keywords" class="badge">
            {{ keyword }}
          </span>
        </p>
      </Box>
    </div>
    <h2>Data Scraper</h2>

    <p>
      The following Python script collected the tweets with specified keywords,
      streamlining the data collection process and saving time. Automating the
      collection ensures a comprehensive dataset for analysis, enabling
      efficient capture of a large volume of essential tweets for model training
      and investigations.
    </p>

    <highlight input="../codeblocks/collection.py" />

    <h2>Criteria</h2>
    <p>
      In order to ensure high quality data, achieve accurate modeling, and
      produce reliable results, the selection of tweets for our dataset is
      guided by the following criteria:
    </p>
    <div class="grid grid-rows-3 gap-8">
      <Card
        class="max-w-none"
        v-for="criterion in criteria"
        :header="criterion.header"
        :msg="criterion.content"
        :icon="criterion.icon"
      />
    </div>
    <p>The following factors were also taken into consideration:</p>
    <div class="grid grid-cols-2 gap-8">
      <Card
        class="max-w-none text-center"
        v-for="type in types"
        :header="type.name"
        :msg="type.description"
        :icon="type.icon"
      />
    </div>

    <router-link to="/results" class="flex items-center gap-4 mt-8 group">
      <p>
        <span class="highlighted group-hover:text-primary"
          >Next chapter: Exploring the Data</span
        >
      </p>

      <v-icon
        name="hi-arrow-right"
        class="transform transition-all group-hover:translate-x-3"
      />
    </router-link>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Box from '@/components/Box.vue';
import Card from '@/components/Card.vue';
import Highlight from '@/components/Highlight.vue';

const keywords = [
  'bayaran npa rally',
  'bayaran para magrally',
  'rally komunista npa',
  'rally aktibista salot',
  'rally komunista',
  'aktibista npa',
  'rally komunista aktibista',
  'rally terorista',
  'rally pumatay',
  'aktibista terorista npa',
  'rally bayad',
];

const criteria = [
  {
    header: 'Relevance',
    content:
      'We prioritize selecting tweets that are directly related to our research topic. This ensures that the data we include in our dataset aligns closely with the focus of our project, allowing us to capture the key elements and nuances of the subject matter.',
    icon: 'hi-presentation-chart-line',
  },
  {
    header: 'Quality',
    content:
      'We place great emphasis on the quality of the tweets we include. This involves filtering out irrelevant content, such as spam or unrelated discussions. By maintaining a high standard of quality, we ensure that our dataset consists of meaningful tweets.',
    icon: 'hi-badge-check',
  },
  {
    header: 'Freshness',
    content:
      'The timeliness of the data is vital, particularly when studying dynamic phenomena such as misinformation. We prioritize recent tweets to ensure that our dataset reflects the most up-to-date trends and patterns, allowing us to draw accurate conclusions based on current information.',
    icon: 'hi-newspaper',
  },
  {
    header: 'Scope',
    content:
      'The scope of our analysis is tweets with mis/disinformation containing the above keywords from January 2016 to December 2022 (the period of Duterte’s presidency).',
    icon: 'hi-calendar',
  },
];

const types = [
  {
    icon: 'hi-chat-alt-2',
    name: 'Tweet type',
    description:
      'Tweets can be in the form of text, replies, links, images, videos, or a combination of these. Quote tweets are counted along with regular replies.',
  },
  {
    icon: 'hi-status-online',
    name: 'Content type',
    description:
      'A tweet with mis/disinformation can have emotional, rational, or transactional content (though no transactional content was found in our data).',
  },
  {
    icon: 'hi-identification',
    name: 'Account type',
    description:
      'A Twitter account can be anonymous, identified, or media (though no media accounts were found in our data).',
  },
  {
    icon: 'hi-emoji-happy',
    name: 'Satire',
    description:
      'A tweet can be satirical (ironically containing mis/disinformation) or not.',
  },
];
</script>

<style scoped>
html {
  overflow-y: auto;
}
</style>
