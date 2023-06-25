<template>
  <div class="article-wrapper">
    <Navbar class="relative block invisible" />
    <h1>Data Exploration</h1>
    <h2>Let's now explore the data.</h2>
    <p>
      Our data exploration process has 4 steps:
      <span class="highlighted">Data understanding</span> where we download our
      data and get an initial overview of it.
      <span class="highlighted">Data preparation</span> where our data is
      filtered, fixed, and narrowed down so it is ready for analysis.

      <span class="highlighted">Feature understanding</span> where individual
      fields of our data are analyzed separately. This is also called univariate
      analysis.

      <span class="highlighted">Feature relationships</span> where we analyze
      how different fields of data interact. This is where we will also do
      time-series analysis.
    </p>
    <h2>Data Understanding</h2>
    <h3>Getting the initial observations from the dataset</h3>
    <p>
      In our project, data understanding is the process of getting to know our
      dataset on misinformation. By analyzing and exploring the data, we aim to
      understand its patterns, quality, and structure. This understanding helps
      us make informed decisions about how to process and analyze the data
      effectively. It sets the foundation for achieving our project goals and
      extracting valuable insights from the dataset.
    </p>
    <p>
      Running the following code below shows our raw data contains
      <span class="highlighted">
        152 entries of data across 33 fields of data.
      </span>
    </p>
    <p>
      Among these 33 fields of data, there were
      <b>4 that had float (or decimal) data types, </b>
      <b>7 that had integer data types</b>, and
      <b>22 that were object (or categorical) data types</b>.
    </p>
    <p>This initial understanding allows us to further prepare our data.</p>
    <highlight
      input="../codeblocks/exploration-0.py"
      output="../codeblocks/exploration-0.out"
    />

    <h2>Data Preparation</h2>
    <h3>Removing columns irrelevant to the topic.</h3>
    <p>
      This study is a <span class="highlighted">time analysis</span> on
      <b>
        how the Duterte Administration affected the red-tagging of activists in
        the Philippines
      </b>
      by observing the tweets of Filipinos within the years 2016 to 2021.
    </p>
    <p>
      Because of this, only columns that can aid in understanding the topic are
      kept in the subset as shown below.
    </p>
    <highlight
      input="../codeblocks/exploration-1.py"
      output="../codeblocks/exploration-1.out"
    />
    <p>The following fields were kept since they were relevant for analysis.</p>

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
    <p>The fields in our data are now relevant. ✅</p>

    <h3>Exploring which columns have NULL values.</h3>
    <p>
      Running the code below shows five fields which contain
      <code>NULL</code> values. These are <code>Account Bio</code>,
      <code>Acount Type</code>, <code>Location</code>,
      <code>Tweet Type</code> and <code>Content Type</code>. The fields
      <code>Location</code> and <code>Account Bio</code> show the highest number
      of <code>NULL</code> values, each with 82 and 58 <code>NULL</code> values
      respectively.
    </p>
    <p>Meanwhile, the other mentioned fields contain only one for each.</p>
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
      A single entry had no Content type, Account type, and Tweet type due to
      human error. This entry was reviewed and given its appropriate values. No
      null values existed in the data after this.
    </p>

    <h3>Reviewing the dataset for NULL values.</h3>
    <p>
      Upon reviewing the subset, no more <code>NULL</code> values are found.
    </p>
    <highlight
      input="../codeblocks/exploration-2.py"
      output="../codeblocks/exploration-22.out"
    />
    <p>Our data is complete. ✅</p>

    <h3>Checking for Uniqueness.</h3>

    <p>Some fields had no duplicates, such as ID, Tweet, and Tweet URL.</p>
    <p>
      The rest of the data fields had duplicates. Duplicates in Account handle
      and Account name mean that our data contained multiple entries from the
      same accounts.
    </p>
    <p>
      Fields of data type <code>integer</code> such as Joined, Following, and
      Followers contain data that fall within a range. Duplicates in these
      fields indicate that some users joined Twitter in the same month/year, or
      that they have the same number of Following or Followers.
    </p>
    <p>
      Other fields are categorical, like Account type, Tweet type, Content type,
      and Satire vs Non-satire.
    </p>
    <p>We can move on to the next factor. ✅</p>

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
      <code>58-49</code> displayed <code>dd/mm/yy HH:SS</code> format instead of
      <code>dd/mm/yyyy HH:SS</code>. These rows were manually changed using
      Google Sheets.
    </p>
    <p>
      Categorical fields were converted to data type <code>category</code>, such
      as Account type, Content type, Tweet type, and Satire vs Non-satire.
    </p>
    <p>Our data is now valid and in the correct format. ✅</p>

    <h3>Checking for Accuracy.</h3>
    <p>
      Since some values under the Location field were not actual locations, this
      field was removed.
    </p>
    <p>
      Additionally, since a typo error under the Satire vs Non-satire field
      caused there to be 3 categories instead of 2, this was corrected to
      reflect the only 2 categories that were needed.
    </p>
    <p>
      Further, the field was renamed to "Satire" with boolean instead of
      categorical entries.
    </p>
    <p>
      We can move on to the next section. Our data is ready for analysis. ✅
    </p>
    <p>An example data entry is as follows:</p>
    <Embed gist-id="7dcc08b4f67edee9334390f280849097" file="data.csv" />

    <h2>Feature Understanding</h2>
    <h3>Measures of center</h3>
    <p>The most common values of each data field are the following:</p>
    <highlight output="../codeblocks/exploration-measures-of-center.out" />

    <p>
      It is notable that there are
      <b> account handles that have more than one tweet, </b> and that it is
      <b>more common to have Anonymous accounts</b> than Identified accounts.
    </p>

    <p>
      There are also a lot of tweets in the form of
      <b>text replies <code>(113/151)</code></b
      >, as well as having
      <b>emotional <code>(140/151)</code> and non-satirical content</b>. The
      first few words displayed by the mode under Reasoning field shows that a
      common mis/disinformation argument used was that "Activists receive
      income". We will explore more later on.
    </p>

    <p>We now look at the <b>mean</b> of numerical fields:</p>
    <highlight output="../codeblocks/exploration-numerical-average.out" />
    <p>We also look at the <b>median</b> values:</p>
    <highlight output="../codeblocks/exploration-numerical-median.out" />

    <p>
      Measures of <b>mean</b> for the <code>Following</code> and
      <code>Followers</code> does not match the corresponding values shown by
      <b>mode</b> and <b>median</b>. This observation can be used later to
      determine if there are outliers.
    </p>

    <h3>Standard deviation</h3>
    <p>The standard deviation of these fields are as follows:</p>
    <Embed gist-id="7dcc08b4f67edee9334390f280849097" file="standard-dev.csv" />

    <h2>Checking for Outliers</h2>
    <Likes />

    <Followers />

    <Following />

    <h2>Time-series Analysis</h2>
    <p>
      This section aims to answer whether there is a correlation among features
      of our data.
    </p>

    <Yearly />

    <h3>Tweet type vs Date posted</h3>
    <p>We look at the frequency of tweet types:</p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba3d8d8d-0977-4b4f-ada4-887fde892000%2FUntitled.png?id=8e8dc6b7-f2b6-404a-aa7b-0a05c0aeb923&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1340&userId=&cache=v2`
      "
      class="chart"
    />
    <p>
      Indeed, a majority are text replies. Next, we look at the tweet types
      versus time.
    </p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbf86c768-7f10-4340-ad4d-8c7c293021f9%2FUntitled.png?id=9a64c524-f140-4ce3-856a-62379ac78d87&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1120&userId=&cache=v2`
      "
      class="chart"
    />
    <p>
      While other tweet types remained relatively stagnant, the text replies
      became the primary way mis/disinformation was spreading especially since
      the pandemic.
    </p>

    <h3>Content type vs Date posted</h3>
    <p>We look at the frequency of content type:</p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffc0dc573-75fd-485d-b1c9-47cf759a2d89%2FUntitled.png?id=af168d01-9430-4b3d-8f0e-03d60a3e0250&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1120&userId=&cache=v2`
      "
      class="chart"
    />
    <p>
      Indeed, a majority of the tweets are emotional, with Anonymous accounts
      greatly contributing to these. Now we look at their progression over the
      years.
    </p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9ffeeb98-20bf-4023-9732-9e9b961380e2%2FUntitled.png?id=0a58a561-094b-44ee-9f37-b3653aa5ea70&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1120&userId=&cache=v2`
      "
      class="chart"
    />
    <p>Indeed, this spike in frequency correlates to the pandemic period.</p>

    <h3>Date posted vs Date joined</h3>
    <p>
      We look at the relationship between the posting of a tweet and the account
      creation of the user tweeting it.
    </p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0c182093-1701-45ad-877e-9a1c61e07667%2FUntitled.png?id=7950af9f-0c52-42ec-a8bc-baaa88c50a50&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=980&userId=&cache=v2`
      "
      class="chart"
    />
    <p>
      While there is great variation, notice that there is an increasing density
      towards the upper right of the graph, signifying that there is a
      correlation between recently made accounts and recently made posted
      tweets.
    </p>

    <h3>Tweet engagement correlation</h3>
    <p>
      For tweet engagement, we look at the correlation among Likes, Replies,
      Retweets, and Quote tweets.
    </p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5bc2ddbf-24cc-4333-999f-6c3901973d60%2FUntitled.png?id=05240737-7d22-43b2-aa91-fa5e35fc8c09&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1030&userId=&cache=v2`
      "
      class="chart"
    />
    <p>
      The strongest correlations in this graph are of that between likes and
      retweets, and between replies and quote tweets. It means it is highly
      likely that a tweet with more likes also has more retweets, and tweets
      with more replies also have more quote tweets.
    </p>
    <div>
      <Box class="max-w-none bg-[#16191c] text-light">
        <p>
          Removing outliers, the majority of our data contains tweets of
          mis/disinformation by
          <span class="highlighted">Anonymous</span> accounts that are primarily
          <span class="highlighted">text replies </span> with an
          <span class="highlighted">emotional</span> and
          <span class="highlighted">non-satirical</span> content.
        </p>

        <p>
          The number of tweets sharply increased over the past few years,
          correlating with the pandemic, lockdown, and significant instances of
          politically charged events. It was also found that majority of the
          tweets, which were posted recently, were also made by accounts that
          were created recently (2020 to 2022).
        </p>
      </Box>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Box from '@/components/Box.vue';
import Embed from '@/components/Embed.vue';
import Highlight from '@/components/Highlight.vue';
import Likes from '@/components/plots/Likes.vue';
import Followers from '@/components/plots/Followers.vue';
import Following from '@/components/plots/Following.vue';
import Yearly from '@/components/plots/Yearly.vue';

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
