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
        <span v-for="keyword in keywords" class="badge">
          {{ keyword }}
        </span>
      </Box>
    </div>
    <h2>Data Scraper</h2>

    <p>
      We have developed a Python script that automates the process of collecting
      tweets that contain the specified keywords mentioned earlier. With these
      scripts in place, the data collection process becomes streamlined and
      efficient, saving valuable time and effort. By automating the collection
      process, we can consistently retrieve relevant tweets without manual
      intervention, ensuring a comprehensive dataset for our analysis. This
      Python script enable us to efficiently capture a large volume of tweets
      that are essential for training our models and conducting thorough
      investigations into the topic at hand.
    </p>

    <highlight input="../codeblocks/collection.py" />

    <h2>Criteria</h2>
    <p>
      In order to achieve accurate modeling and produce reliable results, the
      selection of tweets for our dataset is guided by the following criteria.
      These criteria play a crucial role in ensuring the high quality of the
      data used in our machine learning process:
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
    <p>
      The scope of our analysis is tweets with mis/disinformation containing the
      above keywords from <b>2016 to 2022</b> (the period of Duterte’s
      presidency).
    </p>
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
      'We place great emphasis on the quality of the tweets we include. This involves filtering out low-quality or irrelevant content, such as spam or unrelated discussions. By maintaining a high standard of quality, we ensure that our dataset consists of meaningful and informative tweets.',
    icon: 'hi-badge-check',
  },
  {
    header: 'Freshness',
    content:
      'The timeliness of the data is vital, particularly when studying dynamic phenomena such as misinformation. We prioritize recent tweets to ensure that our dataset reflects the most up-to-date trends and patterns, allowing us to draw accurate conclusions based on current information.',
    icon: 'hi-newspaper',
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
