<template>
  <div class="article-wrapper">
    <navbar class="relative block invisible" />
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
    <h3>Likes</h3>
    <p>
      We explore outliers in the Likes variable. An outlier was found where a
      satirical tweet earned more than 400 likes. This outlier was dropped since
      this was not highly significant to the analysis.
    </p>

    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc7da30e4-6fa9-4c89-8070-e3f1ca756f8d%2FUntitled.png?id=2f0db2be-be86-4a61-93ee-fa69a4a5c609&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=2000&userId=&cache=v2`
      "
      class="chart"
    />
    <p>A boxplot was then used to visualize the distribution of Likes.</p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6536f2b2-6623-4923-8049-7febb294091c%2FUntitled.png?id=6446937a-df8a-4a07-b342-a60b817ca138&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1100&userId=&cache=v2`
      "
      class="chart"
    />
    <p>
      From this, the researchers decided to drop the 3 outliers that exceeded a
      <code>z-score</code> of 3. These were not highly significant to the
      analysis.
    </p>

    <p>We now look at the distribution of likes over time.</p>

    <p>
      The high number of likes in the distribution may be due to accounts having
      a large number of followers. Tweets with more than 10 likes were dropped
      for the analysis. The final graph is as follows:
    </p>

    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faf2f0e85-eafe-4727-82a8-088de1e62b3f%2FUntitled.png?id=b3e45482-29e4-422d-a258-135e909b66f8&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1140&userId=&cache=v2`
      "
      class="chart"
    />

    <p>Removing eight outliers, our data now has <b>144 rows</b>.</p>

    <h3>Followers</h3>

    <p>Let us look at the initial distribution of followers:</p>

    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4fa7f6d-c2cc-42cd-8062-1c30c77b1f3a%2FUntitled.png?id=b9dfcafb-724b-406b-a96f-6151036b6d6f&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1200&userId=&cache=v2`
      "
      class="chart"
    />

    <p>
      Accounts with a followers z-score of more than 3 were dropped from the
      data. To note, the outlier with more than 4000 followers was a columnist,
      though their tweet had low engagements.
    </p>

    <p>The final distribution is as follows:</p>

    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22542198-fc8e-4025-8814-4fd4d1960ccf%2FUntitled.png?id=7f147cd0-86a0-4392-ad54-d3055c69fc9c&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1180&userId=&cache=v2`
      "
      class="chart"
    />

    <p>
      Four rows were dropped in the process. There are now <b>140 rows</b> in
      our data.
    </p>

    <h3>Following</h3>
    <p>We look at the initial distribution of our <b>Following</b> data.</p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7a7d63e6-35c9-4dba-8af3-7672255e2b85%2FUntitled.png?id=75c17eb2-80b1-4572-bd59-a2744c1f9c9e&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1160&userId=&cache=v2`
      "
      class="chart"
    />
    <p>
      After removing 3 outliers with a z-score of more than 2, this was the
      distribution:
    </p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8173f818-a185-4939-848d-d4d1518b2e34%2FUntitled.png?id=0512bf41-4cff-49be-b4fe-cacc1f66e7f5&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1160&userId=&cache=v2`
      "
      class="chart"
    />
    <p>This is the boxplot:</p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F787b125d-8df8-4459-931f-c8f210f39ece%2FUntitled.png?id=1b0fee1e-2d8d-4f19-b8f4-c58f61bc8b3b&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1120&userId=&cache=v2`
      "
      class="chart"
    />
    <p>
      Since there are too many minor outliers to be dropped, the researches
      decided to keep them for now.
    </p>

    <p>
      There are now <b>137 rows in our data</b>. We now proceed with feature
      relationships.
    </p>

    <h2>Time-series Analysis</h2>
    <p>
      This section aims to answer whether there is a correlation among features
      of our data.
    </p>

    <h3>Tweet count vs Date posted</h3>
    <p>Let us look at the frequency of tweets over time.</p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fab858734-247e-42f2-b3ad-26034a9774aa%2FUntitled.png?id=97c791c8-d026-4773-bed1-ad6dd419db9d&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1120&userId=&cache=v2`
      "
      class="chart"
    />
    <p>
      There was a sharp increase in the number of tweets in 2020 to 2022. It is
      known that these are the years of the pandemic and the lockdown policies.
      There was a shift to almost purely online communication amid the
      politically charged atmosphere. Note that a huge number of tweets come
      from Anonymous users.
    </p>
    <p>We look at the tweet frequency per year.</p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F57a26442-2b82-4ef2-aab7-2beef2f20dbf%2FUntitled.png?id=42ff8866-ac45-400f-934f-62794f3369e8&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1110&userId=&cache=v2`
      "
      class="chart"
    />
    <p>
      In 2020, the number of tweets peaked during April and November. It must be
      noted that April 2020 was right after the lockdown protocols began and
      hungry citizens began to clamor for food aid. As this resulted to protocol
      violations from civilians, former president Duterte responded with an
      impromptu address to the nation, saying
      <a
        href="https://foreignpolicy.com/2020/04/16/duterte-philippines-coronavirus-response-shoot-them-dead/"
      >
        Shoot them dead </a
      >.
    </p>
    <p>
      While November 2020 was the month when Duterte publicly
      <a
        href="https://www.rappler.com/nation/duterte-red-tags-carlos-zarate-progressive-groups-insult-laden-tirade-november-30-2020/"
        >redtags</a
      >
      progressive groups.
    </p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcba1ac07-3ead-4126-9129-eb71aadb115f%2FUntitled.png?id=60530c42-4063-4a82-96b4-0a1d6d0fc5e4&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1130&userId=&cache=v2`
      "
      class="chart"
    />
    <p>
      In 2021, the peaks happened during February and April. February 2021
      correlated with events such as the Supreme Court junking Bongbong Marcos
      Jr.’s electoral protest against Leni Robredo. April 2021 was the time
      community pantries started, and these were redtagged by many
      pro-administration Twitter users.
    </p>
    <img
      v-lazy="
        `https://migopags.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7cee33b3-a95f-406e-8739-d7fde640d85b%2FUntitled.png?id=119c1aa0-c3d1-46bc-b9d1-a843a43675e9&table=block&spaceId=b30c35ff-1356-4d11-93cc-aefcfd03f1c4&width=1120&userId=&cache=v2`
      "
      class="chart"
    />
    <p>
      In 2022, the peaks were towards the last half of the year. Despite this
      being outside the period of the Duterte administration, the continuous
      rise could still be understood as an effect of it.
    </p>
    <p>
      It must be noted, however, that the peak in May 2022 coincides with the
      national elections. This is also a time that redtagging was rampant as the
      electoral campaigns intensified.
    </p>

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
