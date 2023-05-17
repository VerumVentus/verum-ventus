<template>
  <div class="wrapper">
    <navbar class="relative block invisible" />
    <h1>Data Exploration</h1>
    <h2>Let's now explore the data.</h2>
    <p>
      Our data exploration process comprises two key steps:
      <span class="highlighted">data pre-processing</span> and
      <span class="highlighted">data visualization</span>. This process serves
      as an essential initial step to gain valuable insights from the dataset,
      allowing us to understand its characteristics and identify underlying
      patterns.
    </p>
    <h2>Getting the initial observations from the dataset</h2>
    <p>
      In our project, data understanding is the process of getting to know our
      dataset on misinformation. By analyzing and exploring the data, we aim to
      understand its patterns, quality, and structure. This understanding helps
      us make informed decisions about how to process and analyze the data
      effectively. It sets the foundation for achieving our project goals and
      extracting valuable insights from the dataset.
    </p>
    <p>
      Running the following code below shows that the dataset contains 152 rows
      and 33 columns. The data types present are: object, integer, and float
    </p>
    <highlight
      input="../codeblocks/exploration-0.py"
      output="../codeblocks/exploration-0.out"
    />
    <h2>Removing columns irrelevant to the topic.</h2>
    <p>
      This study is a time analysis on how the Duterte Administration affected
      the red-tagging of activists in the Philippines by observing the tweets of
      Filipinos within the years 2016 to 2021.
    </p>
    <p>
      Because of this, only columns that can aid in understanding the topic are
      kept in the subset as shown below.
    </p>

    <highlight
      input="../codeblocks/exploration-1.py"
      output="../codeblocks/exploration-1.out"
    />

    <h2>Exploring which columns have NULL values.</h2>

    <p>
      Running the code below shows five fields which contain
      <code>NULL</code> values. These are <code>Account Bio</code>,
      <code>Acount Type</code>, <code>Location</code>,
      <code>Tweet Type</code> and <code>Content Type</code>. The fields
      <code>Location</code> and <code>Account Bio</code> show the highest number
      of <code>NULL</code> values, each with 82 and 58 <code>NULL</code> values
      respectively. Meanwhile, the other mentioned fields contain only one for
      each.
    </p>
    <highlight
      input="../codeblocks/exploration-2.py"
      output="../codeblocks/exploration-2.out"
    />

    <h3>Location and Account Bio Fields</h3>
    <p>
      These fields may be empty due to the user's preferences and privacy
      settings. Therefore the <code>NULL</code> values are changed to
      <code>None</code>.
    </p>
    <highlight input="../codeblocks/exploration-3.py" />

    <h3>Content Type, Account Type, Tweet Type Fields</h3>
    <p>
      The single <code>NULL</code> value in each field is from human error (the
      researcher forgot to fill the mentioned fields in the same row).
      Therefore, the original tweet was reviewed and the appropriate category
      was used to replace the <code>NULL</code> value.
    </p>
    <highlight input="../codeblocks/exploration-4.py" />

    <h3>Reviewing the dataset for NULL values.</h3>
    <p>
      Upon reviewing the subset, no more <code>NULL</code> values are found. Our
      data is now COMPLETE and we can proceed to the next steps.
    </p>
    <highlight
      input="../codeblocks/exploration-2.py"
      output="../codeblocks/exploration-22.out"
    />

    <p>
      Our dataset has a well-defined structure with 152 rows and 21 columns.
      This means that we have collected 151 tweets and each tweet is described
      using 26 fields of information. Below is the list of features in our
      dataset.
    </p>
    <div class="pb-4">
      <Box class="text-center max-w-none bg-[#16191c]">
        <div class="w-full grid grid-cols-2 divide-x divide-base/20">
          <div class="flex items-center flex-col">
            <h3>Categorical</h3>
            <div class="w-4/5">
              <span v-for="field in categorical" class="badge">
                {{ field }}
              </span>
            </div>
          </div>
          <div class="flex items-center flex-col">
            <h3>Numerical</h3>
            <div class="w-4/5">
              <span v-for="field in numerical" class="badge">
                {{ field }}
              </span>
            </div>
          </div>
        </div>
      </Box>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Box from '@/components/Box.vue';
import Card from '@/components/Card.vue';
import GistEmbed from '@/components/GistEmbed.vue';
import reader from '@/utils/reader';
import Highlight from '@/components/Highlight.vue';

const categorical = ['Account type', 'Tweet Type', 'Content type', 'Satire'];

const numerical = [
  'Following',
  'Followers',
  'Likes',
  'Replies',
  'Retweets',
  'Quote Tweets',
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
      'We place great emphasis on the quality of the tweets we include. This involves filtering out low-quality or irrelevant content, such as spam, advertisements, or unrelated discussions. By maintaining a high standard of quality, we ensure that our dataset consists of meaningful and informative tweets.',
    icon: 'hi-badge-check',
  },
  {
    header: 'Freshness',
    content:
      'The timeliness of the data is vital, particularly when studying dynamic phenomena such as misinformation. We prioritize recent tweets to ensure that our dataset reflects the most up-to-date trends and patterns, allowing us to draw accurate conclusions based on current information.',
    icon: 'hi-globe',
  },
];
</script>
