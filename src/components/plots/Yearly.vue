<template>
  <h3>Tweet count vs Date posted</h3>
  <p>Let us look at the frequency of tweets over time.</p>

  <v-plotly
    :key="`followersXpostedScatterData`"
    :data="yearlyTweetCountData"
    :layout="yearlyTweetCountLayout"
    :config="config"
  />

  <p>
    There was a sharp increase in the number of tweets in 2020 to 2022. It is
    known that these are the years of the pandemic and the lockdown policies.
    There was a shift to almost purely online communication amid the politically
    charged atmosphere. Note that a huge number of tweets come from Anonymous
    users.
  </p>
  <p>We look at the tweet frequency per year.</p>

  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-2 gap-4">
      <v-plotly
        class="lg:col-span-1 col-span-2"
        :key="`year2019TweetCountData`"
        :data="year2019TweetCountData"
        :layout="year2019Layout"
        :config="config"
      />
      <v-plotly
        class="lg:col-span-1 col-span-2"
        :key="`year2020TweetCountData`"
        :data="year2020TweetCountData"
        :layout="year2020Layout"
        :config="config"
      />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <v-plotly
        class="lg:col-span-1 col-span-2"
        :key="`year2021TweetCountData`"
        :data="year2021TweetCountData"
        :layout="year2021Layout"
        :config="config"
      />
      <v-plotly
        class="lg:col-span-1 col-span-2"
        :key="`year2022TweetCountData`"
        :data="year2022TweetCountData"
        :layout="year2022Layout"
        :config="config"
      />
    </div>
  </div>

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

  <!-- plot -->

  <p>
    In 2021, the peaks happened during February and April. February 2021
    correlated with events such as the Supreme Court junking Bongbong Marcos
    Jr.’s electoral protest against Leni Robredo. April 2021 was the time
    community pantries started, and these were redtagged by many
    pro-administration Twitter users.
  </p>

  <!-- plot -->

  <p>
    In 2022, the peaks were towards the last half of the year. Despite this
    being outside the period of the Duterte administration, the continuous rise
    could still be understood as an effect of it.
  </p>
  <p>
    It must be noted, however, that the peak in May 2022 coincides with the
    national elections. This is also a time that redtagging was rampant as the
    electoral campaigns intensified.
  </p>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { DateTime } from 'luxon';
import settings from '@/utils/plotly';

import Papa from 'papaparse';
const yearlyTweetCountLayout = ref({
  title: 'Amount of tweets posted yearly',
  xaxis: {
    title: 'Date',
    type: 'date',
    showgrid: false,
    zeroline: false,
  },
  yaxis: {
    title: 'Count',
    showline: false,
    gridcolor: settings.gridcolor,
  },
  ...settings,
});

const yearlyLayout = {
  xaxis: {
    title: 'Date',
    showgrid: false,
    zeroline: false,
  },
  yaxis: {
    title: 'Count',
    showline: false,
    gridcolor: settings.gridcolor,
  },
  ...settings,
};

const year2019Layout = ref({
  title: 'Number of Tweets Posted Monthly in 2019',
  ...yearlyLayout,
});
const year2020Layout = ref({
  title: 'Number of Tweets Posted Monthly in 2020',
  ...yearlyLayout,
});
const year2021Layout = ref({
  title: 'Number of Tweets Posted Monthly in 2021',
  ...yearlyLayout,
});
const year2022Layout = ref({
  title: 'Number of Tweets Posted Monthly in 2022',
  ...yearlyLayout,
});

const yearlyTweetCountData = ref([]);
const year2019TweetCountData = ref([]);
const year2020TweetCountData = ref([]);
const year2021TweetCountData = ref([]);
const year2022TweetCountData = ref([]);

const config = {
  displayModeBar: false,
  resposive: true,
  scrollZoom: true,
};

onMounted(() => {
  loadExploration();
});

const loadExploration = () => {
  Papa.parse(
    'https://raw.githubusercontent.com/VerumVentus/twitter-scraper/main/exploration/3_dropped_following_outliers.csv',
    {
      download: true,
      header: true,
      complete(results) {
        const csvData = results.data;
        csvData.forEach((row) => {
          row['Date posted'] = row['Date posted']
            ? new Date(
                DateTime.fromFormat(
                  row['Date posted'],
                  'yyyy-MM-dd HH:mm:ss'
                ).toFormat('MM/dd/yyyy')
              )
            : row['Date posted'];

          row['Year'] = row['Date posted']
            ? new Date(row['Date posted']).getFullYear()
            : row['Year'];

          row['Month'] = row['Date posted']
            ? DateTime.fromISO(row['Date posted'].toISOString()).toFormat('MMM')
            : undefined;
        });

        const years = new Set(csvData.map((row) => row['Year']));
        years.delete(undefined);
        const sortedYears = [...years].sort((a, b) => a - b);

        const anonTweetCounts = sortedYears.map((year) => {
          const subset = csvData.filter(
            (row) => row['Year'] === year && row['Account type'] === 'Anonymous'
          );
          return subset.length;
        });

        const identifiedTweetCounts = sortedYears.map((year) => {
          const subset = csvData.filter(
            (row) =>
              row['Year'] === year && row['Account type'] === 'Identified'
          );
          return subset.length;
        });

        yearlyTweetCountData.value = [
          {
            x: sortedYears,
            y: anonTweetCounts,
            name: 'Anonymous',
            type: 'scatter',
            marker: {
              color: '#8f3ced',
            },
            hoverlabel: {
              bordercolor: '#00000000',
              font: {
                color: 'white',
              },
            },
          },
          {
            x: sortedYears,
            y: identifiedTweetCounts,
            name: 'Identified',
            type: 'scatter',
            marker: {
              color: '#c8245b',
            },
            hoverlabel: {
              bordercolor: '#00000000',
              font: {
                color: 'white',
              },
            },
          },
        ];

        const year2019 = csvData.filter((row) => row['Year'] === 2019);
        const year2020 = csvData.filter((row) => row['Year'] === 2020);
        const year2021 = csvData.filter((row) => row['Year'] === 2021);
        const year2022 = csvData.filter((row) => row['Year'] === 2022);

        const months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];

        year2019TweetCountData.value = [
          {
            x: months,
            y: months.map((month) => {
              const subset = year2019.filter((row) => row['Month'] === month);
              return subset.length;
            }),
            name: '2019',
            type: 'scatter',
            marker: {
              color: '#c8245b',
            },
            hoverlabel: {
              bordercolor: '#00000000',
              font: {
                color: 'white',
              },
            },
          },
        ];
        year2020TweetCountData.value = [
          {
            x: months,
            y: months.map((month) => {
              const subset = year2020.filter((row) => row['Month'] === month);
              return subset.length;
            }),
            name: '2020',
            type: 'scatter',
            marker: {
              color: '#c8245b',
            },
            hoverlabel: {
              bordercolor: '#00000000',
              font: {
                color: 'white',
              },
            },
          },
        ];
        year2021TweetCountData.value = [
          {
            x: months,
            y: months.map((month) => {
              const subset = year2021.filter((row) => row['Month'] === month);
              return subset.length;
            }),
            name: '2021',
            type: 'scatter',
            marker: {
              color: '#c8245b',
            },
            hoverlabel: {
              bordercolor: '#00000000',
              font: {
                color: 'white',
              },
            },
          },
        ];
        year2022TweetCountData.value = [
          {
            x: months,
            y: months.map((month) => {
              const subset = year2022.filter((row) => row['Month'] === month);
              return subset.length;
            }),
            name: '2022',
            type: 'scatter',
            marker: {
              color: '#c8245b',
            },
            hoverlabel: {
              bordercolor: '#00000000',
              font: {
                color: 'white',
              },
            },
          },
        ];
      },
    }
  );
};
</script>
