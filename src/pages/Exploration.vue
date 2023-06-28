<template>
  <div class="wrapper">
    <div class="flex gap-8 justify-between">
      <div class="article-wrapper">
        <Navbar class="relative block invisible" />
        <h1>Data Exploration</h1>
        <section id="data-exploration">
          <h2>Making sense of the data</h2>
          <p>Our data exploration process has 4 steps:</p>
          <div class="grid grid-cols-2 gap-8">
            <Card
              class="max-w-none text-center"
              v-for="step in steps"
              :header="step.name"
              :msg="step.description"
              :icon="step.icon"
            />
          </div>
        </section>
        <section id="data-understanding">
          <h2>Data Understanding</h2>
          <h3>Getting the initial observations from the dataset</h3>
          <p>
            In our project, data understanding is the process of getting to know
            the inital state of our dataset. By analyzing and exploring the
            data, we aim to understand its patterns, quality, and structure.
            This understanding helps us make informed decisions about how to
            process and analyze the data effectively. It sets the foundation for
            achieving our project goals and extracting valuable insights from
            the dataset.
          </p>
          <p>
            Running the following code below shows our raw data contains
            <span class="highlighted">
              152 entries of data across 33 fields of data.
            </span>
          </p>
          <p>Among these 33 fields of data, there were:</p>
          <div class="pb-4">
            <Box class="text-center max-w-none bg-[#16191c]">
              <div
                class="w-full grid lg:grid-cols-3 grid-cols-1 lg:divide-x divide-white/10 lg:divide-y-0 divide-y gap-4 divide-base/20"
              >
                <div class="flex items-center flex-col">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-light">
                    Float
                  </h5>
                  <div class="w-4/5">
                    <p class="my-0">4 Fields</p>
                  </div>
                </div>
                <div class="flex items-center flex-col">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-light">
                    Integer
                  </h5>
                  <div class="w-4/5">
                    <p class="my-0">7 Fields</p>
                  </div>
                </div>
                <div class="flex items-center flex-col">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-light">
                    Categorical
                  </h5>
                  <div class="w-4/5">
                    <p class="my-0">22 Fields</p>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <p>
            This initial understanding allows us to further prepare our data.
          </p>
          <highlight
            input="../codeblocks/exploration-0.py"
            output="../codeblocks/exploration-0.out"
          />
        </section>

        <section id="data-preparation">
          <h2>Data Preparation</h2>
          <p>
            This step makes sure that the dataset contains data which are
            relevant, complete, unique, valid and accurate.
          </p>
          <h3>Removing columns irrelevant to the topic.</h3>
          <p>
            This study is a
            <span class="highlighted">time series analysis</span> on
            <b>
              how the Duterte Administration affected the red-tagging of
              activists in the Philippines
            </b>
            by observing the tweets of Filipinos within the years 2016 to 2021.
          </p>
          <p>
            Because of this, only columns that can aid in understanding the
            topic are kept in the subset as shown below.
          </p>
          <highlight
            input="../codeblocks/exploration-1.py"
            output="../codeblocks/exploration-1.out"
          />
          <p>
            A total of 22 fields were kept as shown below since they were
            relevant for analysis.
          </p>
          <div class="pb-4">
            <Box class="text-center max-w-none bg-[#16191c]">
              <div
                class="w-full grid lg:grid-cols-2 grid-cols-1 lg:divide-x divide-white/10 lg:divide-y-0 divide-y gap-4 divide-base/20"
              >
                <div class="flex items-center flex-col">
                  <h3>Categorical</h3>
                  <div class="w-4/5">
                    <p>
                      <span v-for="field in categorical" class="badge">
                        {{ field }}
                      </span>
                    </p>
                  </div>
                </div>
                <div class="flex items-center flex-col">
                  <h3>Numerical</h3>
                  <div class="w-4/5">
                    <p>
                      <span v-for="field in numerical" class="badge">
                        {{ field }}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <h3>Exploring which columns have NULL values.</h3>
          <p>
            Running the code below shows five fields which contain
            <code>NULL</code> values. These are <code>Account Bio</code>,
            <code>Acount Type</code>, <code>Location</code>,
            <code>Tweet Type</code> and <code>Content Type</code>. The fields
            <code>Location</code> and <code>Account Bio</code> show the highest
            number of <code>NULL</code> values, each with 82 and 58
            <code>NULL</code> values respectively.
          </p>
          <p>
            Meanwhile, the other mentioned fields contain only one for each.
          </p>
          <highlight
            input="../codeblocks/exploration-2.py"
            output="../codeblocks/exploration-2.out"
          />
          <p>
            Some accounts did not have an <code>Account bio</code> or a
            <code>Location</code>. These values were imputed with a
            <code>None</code> value.
          </p>
          <p>
            A single entry had no Content type, Account type, and Tweet type due
            to human error. This entry was reviewed and given its appropriate
            values. No null values existed in the data after this.
          </p>
          <h3>Reviewing the dataset for NULL values.</h3>
          <p>
            Upon reviewing the subset, no more <code>NULL</code> values are
            found.
          </p>
          <highlight
            input="../codeblocks/exploration-2.py"
            output="../codeblocks/exploration-22.out"
          />
          <h3>Checking for Uniqueness.</h3>
          <p>
            Some fields had no duplicates, such as ID, Tweet, and Tweet URL.
          </p>
          <p>
            The rest of the data fields had duplicates. Duplicates in Account
            handle and Account name mean that our data contained multiple
            entries from the same accounts.
          </p>
          <p>
            Fields of data type <code>integer</code> such as Joined, Following,
            and Followers contain data that fall within a range. Duplicates in
            these fields indicate that some users joined Twitter in the same
            month/year, or that they have the same number of Following or
            Followers.
          </p>
          <p>
            Other fields are categorical, like Account type, Tweet type, Content
            type, and Satire vs Non-satire.
          </p>
          <h3>Checking for Validity.</h3>
          <p>
            For Timestamp, Joined and Date Posted, these fields contain
            <code>string</code> data types when its format should be in
            <code>datetime</code>. This could easily be converted using the
            <code>pd.to_datetime</code> function.
          </p>
          <p>
            Inconsistency with the date formatting was also found at the field
            <code>Timestamp</code>. Rows with IDs <code>58-1</code> to
            <code>58-49</code> displayed <code>dd/mm/yy HH:SS</code> format
            instead of <code>dd/mm/yyyy HH:SS</code>. These rows were manually
            changed using Google Sheets.
          </p>
          <p>
            Categorical fields were converted to data type
            <code>category</code>, such as Account type, Content type, Tweet
            type, and Satire vs Non-satire.
          </p>
          <h3>Checking for Accuracy.</h3>
          <p>
            Since some values under the Location field were not actual
            locations, this field was removed.
          </p>
          <p>
            Additionally, since a typo error under the Satire vs Non-satire
            field caused there to be 3 categories instead of 2, this was
            corrected to reflect the only 2 categories that were needed.
          </p>
          <p>
            Further, the field was renamed to "Satire" with boolean instead of
            categorical entries.
          </p>
          <p>An example data entry is as follows:</p>
          <Embed gist-id="7dcc08b4f67edee9334390f280849097" file="data.csv" />
        </section>
        <section id="feature-understanding">
          <h2>Feature Understanding</h2>
          <h3>Measures of center</h3>
          <p>The most common values of each data field are the following:</p>
          <highlight
            output="../codeblocks/exploration-measures-of-center.out"
          />

          <p>
            It is notable that there are
            <b> account handles that have more than one tweet, </b> and that it
            is <b>more common to have Anonymous accounts</b> than Identified
            accounts.
          </p>

          <p>
            There are also a lot of tweets in the form of
            <b>text replies <code>(113/151)</code></b
            >, as well as having
            <b>emotional <code>(140/151)</code> and non-satirical content</b>.
            The first few words displayed by the mode under Reasoning field
            shows that a common mis/disinformation argument used was that
            "Activists receive income". We will explore more later on.
          </p>

          <p>We now look at the <b>mean</b> of numerical fields:</p>
          <highlight output="../codeblocks/exploration-numerical-average.out" />
          <p>We also look at the <b>median</b> values:</p>
          <highlight output="../codeblocks/exploration-numerical-median.out" />

          <p>
            Measures of <b>mean</b> for the <code>Following</code> and
            <code>Followers</code> does not match the corresponding values shown
            by <b>mode</b> and <b>median</b>. This observation can be used later
            to determine if there are outliers.
          </p>

          <h3>Standard deviation</h3>
          <p>The standard deviation of these fields are as follows:</p>
          <Embed
            gist-id="7dcc08b4f67edee9334390f280849097"
            file="standard-dev.csv"
          />

          <h3>Checking for Outliers</h3>
          <Likes />

          <Followers />

          <Following />

          <h3>Time-series Analysis</h3>
          <p>
            This section aims to answer whether there is a correlation among
            features of our data.
          </p>

          <Yearly />

          <h3>Trends of Account Type, Tweet Type and Content Type</h3>

          <p>Here we see the frequency of Tweet Types.</p>
          <TweetType />

          <p>Here's for the Content Types.</p>
          <ContentType />

          <p>
            The majority of tweets fall into
            <b>
              emotional content, text-reply, and anonymous user categories.
            </b>
            These suggest that tweets aimed at activists from 2016 to 2022 were
            spread on Twitter through emotional reactionary replies from
            anonymous users.
          </p>

          <p>
            This observation can be a good place to start for future researchers
            who intend to investigate on troll farms in the Philippines.
          </p>

          <h3>Date Posted vs Date Joined</h3>
          <p>
            We look at the relationship between the posting of a tweet and the
            account creation of the user tweeting it.
          </p>

          <Posted />

          <p>
            While there is great variation, notice that there is an increasing
            density towards the upper right of the graph.
          </p>
          <p>
            This suggests that
            <b>
              many of the recent tweets targetting activists on Twitter were
              posted by newly made accounts,
            </b>
            a behavior which can be associated with the recent rise of troll
            farms in the country.
          </p>

          <p>
            This observation can also be a good place to start for future
            researchers who intend to further investigate on troll farms in the
            Philippines.
          </p>

          <Engagement />

          <div>
            <Box class="max-w-none bg-[#16191c] text-light">
              <p>
                Removing outliers, the majority of our data contains tweets of
                mis/disinformation by
                <span class="highlighted">Anonymous</span> accounts that are
                primarily <span class="highlighted">text replies </span> with an
                <span class="highlighted">emotional</span> and
                <span class="highlighted">non-satirical</span> content.
              </p>

              <p>
                The number of tweets sharply increased over the past few years,
                correlating with the pandemic, lockdown, and significant
                instances of politically charged events. It was also found that
                majority of the tweets, which were posted recently, were also
                made by accounts that were created recently (2020 to 2022).
              </p>
            </Box>
          </div>
        </section>

        <router-link to="/results" class="flex items-center gap-4 mt-8 group">
          <p>
            <span class="highlighted group-hover:text-primary"
              >Next chapter: Results and Discussions</span
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
import Navbar from '@/components/Navbar.vue';
import Box from '@/components/Box.vue';
import Embed from '@/components/Embed.vue';
import Highlight from '@/components/Highlight.vue';
import Likes from '@/components/plots/Likes.vue';
import Followers from '@/components/plots/Followers.vue';
import Following from '@/components/plots/Following.vue';
import Yearly from '@/components/plots/Yearly.vue';
import TweetType from '@/components/plots/TweetType.vue';
import ContentType from '@/components/plots/ContentType.vue';
import Posted from '@/components/plots/Posted.vue';
import Engagement from '@/components/plots/Engagement.vue';
import Card from '@/components/Card.vue';
import StickySpy from '@/components/StickySpy.vue';

const categorical = [
  'ID',
  'Timestamp',
  'Tweet URL',
  'Account handle',
  'Account name',
  'Account bio',
  'Account type',
  'Joined',
  'Location',
  'Tweet',
  'Reasoning',
  'Tweet type',
  'Date posted',
  'Content type',
  'Satire',
];

const numerical = [
  'Following',
  'Followers',
  'Likes',
  'Replies',
  'Retweets',
  'Quote Tweets',
];

const steps = [
  {
    icon: 'hi-bookmark-alt',
    name: 'Data Understanding',
    description:
      'Download the data and get an initial overview of it. This is where the data scraper was used.',
  },
  {
    icon: 'hi-filter',
    name: 'Data preparation',
    description:
      'Data is filtered, fixed, and narrowed down so it is ready for analysis',
  },
  {
    icon: 'hi-light-bulb',
    name: 'Feature understanding',
    description:
      'Individual fields of the data are analyzed separately. This is also called univariate analysis.',
  },
  {
    icon: 'hi-chat-alt-2',
    name: 'Feature relationships',
    description:
      'Analyze how different fields of data interact. This is where we will also do time-series analysis.',
  },
];
</script>
